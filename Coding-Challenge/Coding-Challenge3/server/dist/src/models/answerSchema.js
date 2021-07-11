"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var mongoose_1 = __importDefault(require("mongoose"));
var answerSchema = new mongoose_1.default.Schema({
    questionId: {
        type: String,
        required: true,
    },
    answeredUserId: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
    },
    voteCount: {
        type: Number,
    },
}, { collection: "answers" });
module.exports = mongoose_1.default.model("answer", answerSchema);
