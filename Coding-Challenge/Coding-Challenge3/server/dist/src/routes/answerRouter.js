"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.answerRouter = void 0;
var express_1 = __importDefault(require("express"));
var answerController_1 = require("../controllers/answerController");
exports.answerRouter = express_1.default.Router();
exports.answerRouter.post("/", answerController_1.addNewanswer);
exports.answerRouter.get("/questionId/:questionId", answerController_1.getAnswersByQuestion);
