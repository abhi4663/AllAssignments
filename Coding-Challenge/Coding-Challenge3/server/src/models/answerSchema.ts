import mongoose from "mongoose";
const answerSchema = new mongoose.Schema(
  {
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
  },
  { collection: "answers" }
);

export = mongoose.model("answer", answerSchema);
