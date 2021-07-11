import express from "express";
import {
  addNewanswer,
  getAnswersByQuestion,
} from "../controllers/answerController";
import { authenticate } from "../controllers/userController";

export const answerRouter = express.Router();

answerRouter.post("/", addNewanswer);

answerRouter.get("/questionId/:questionId", getAnswersByQuestion);
