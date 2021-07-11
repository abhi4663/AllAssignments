import jwt from "jsonwebtoken";
import env from "dotenv";
import User from "../models/userSchema";
env.config();

// Checks if user is authenticated or not
export const isAuthenticatedUser = async (req: any, res: any, next: any) => {
  try {
    const header = req.header("Authorization");
    console.log(header);

    const token = header && header.split(" ")[1];

    if (token === null) {
      return res.sendStatus(401);
    }
    jwt.verify(token, `${process.env.jwtSecret}`, (err: any, user: any) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res.status(401).json({
            message: "session expired...Please login Again!",
            success: false,
          });
        }
        return res.status(403).json({
          message: "Something went wrong: " + err.message,
          success: false,
        });
      }
      req.user = user;
      console.log(user);
      next();
    });
  } catch (err) {
    res.status(404).send({
      success: false,
      message: "Error while Authenticating the User",
    });
  }
};
