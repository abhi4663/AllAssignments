import express from "express";
import {
  getAllquestions,
  addNewquestion,
  getQuestionByCategory,
  getQuestionById,
  getQuestionByText,
} from "../controllers/questionController";
import { authenticate } from "../controllers/userController";

export const questionRouter = express.Router();

questionRouter.get("/", getAllquestions);

questionRouter.post("/", addNewquestion);

questionRouter.get("/categories/:categories", getQuestionByCategory);

questionRouter.get("/id/:id", getQuestionById);

questionRouter.get("/text/:question", getQuestionByText);
