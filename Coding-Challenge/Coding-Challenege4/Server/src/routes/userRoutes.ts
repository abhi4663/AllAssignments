import express from "express";
import { registerUser, loginUser } from "../controllers/userController";
export const userRouter = express.Router();

// const omdb = new (require("omdbapi"))("cd39ad7");

userRouter.post("/register", registerUser);

userRouter.post("/login", loginUser);

// omdb
//   .get({
//     id: "tt3896198",
//   })
//   .then((res: any) => {
//     console.log("got response:", res);
//   })
//   .catch(console.error);
