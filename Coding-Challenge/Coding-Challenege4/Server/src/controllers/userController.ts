import jwt from "jsonwebtoken";
const bcrypt = require("bcryptjs");
import User from "../models/userSchema";

export const loginUser = async (req: any, res: any) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "credential missing" });
  }
  User.findOne({ email }).then((user: any) => {
    if (!user) return res.status(400).json({ msg: "user doesnot exists" });
    //validate password
    bcrypt.compare(password, user.password).then((isMatch: any) => {
      if (!isMatch) return res.json(401);

      jwt.sign(
        { id: user._id },
        `${process.env.jwtSecret}`,
        { expiresIn: 3600 },
        (err: any, token: any) => {
          if (err) throw err;
          res.json(token);
          res.status(200).send("User is Loggedin Successfully...");
        }
      );
    });
  });
};

export function authenticate(req: any, res: any, next: any) {
  const header = req.header("Authorization");
  console.log(header);

  const token = header && header.split(" ")[1];

  if (token === null) {
    return res.sendStatus(401);
  }
  jwt.verify(token, "abhi18", (err: any, User: any) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).json("session expired...Please login Again!");
      }
      return res.status(403).json("Something went wrong: " + err.message);
    }

    req.user = User;
    next();
  });
}

export const registerUser = async (req: any, res: any) => {
  let { name, email, password } = req.body;
  console.log("recieved data for registration");
  // validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "please enter all fields" });
  }
  let newUser: any;
  User.findOne({ email }).then((user: any) => {
    if (user) {
      console.log(user);
      return res.status(400).json({ msg: "user already exists" });
    }
    newUser = new User({
      name,
      email,
      password,
    });
    //create salt and hash
    console.log(newUser);
    bcrypt.genSalt(10, (err: any, salt: any) => {
      bcrypt.hash(newUser.password, salt, (err: any, hash: any) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user: any) => {
          // res.send(user);
          res.status(200).send("User is Registered Successfully...");
        });
      });
    });
  });
};
