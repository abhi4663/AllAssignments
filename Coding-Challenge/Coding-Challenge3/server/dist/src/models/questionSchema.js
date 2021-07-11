"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var mongoose_1 = __importDefault(require("mongoose"));
var questionSchema = new mongoose_1.default.Schema({
    question: {
        type: String,
        required: true,
    },
    categories: {
        type: Array,
        required: true,
    },
    // answers: {
    //   type: [{ type: mongoose.Schema.Types.ObjectId, ref: "answer" }],
    // },
    voteCount: {
        type: Number,
    },
    askedUser: {
        type: String,
        required: true,
    },
}, { collection: "questions" });
module.exports = mongoose_1.default.model("question", questionSchema);
