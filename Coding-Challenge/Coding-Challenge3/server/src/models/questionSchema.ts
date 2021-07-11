import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
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
  },
  { collection: "questions" }
);

export = mongoose.model("question", questionSchema);
