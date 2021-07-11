"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionRouter = void 0;
var express_1 = __importDefault(require("express"));
var questionController_1 = require("../controllers/questionController");
exports.questionRouter = express_1.default.Router();
exports.questionRouter.get("/", questionController_1.getAllquestions);
exports.questionRouter.post("/", questionController_1.addNewquestion);
exports.questionRouter.get("/categories/:categories", questionController_1.getQuestionByCategory);
exports.questionRouter.get("/id/:id", questionController_1.getQuestionById);
exports.questionRouter.get("/text/:question", questionController_1.getQuestionByText);
