import Answer from "../models/answerSchema";

export const addNewanswer = async (req: any, res: any) => {
  const answers = new Answer({
    questionId: req.body.questionId,
    answeredUserId: req.body.answeredUserId,
    answer: req.body.answer,
    voteCount: 0,
  });

  try {
    const a1 = await answers.save();
    res.status(200).send("answer is Added Successfully...");
  } catch (err: any) {
    res.status(400).send("Error", err.message);
  }
};

export const getAnswersByQuestion = async (req: any, res: any) => {
  try {
    const answers = await Answer.find({ questionId: req.params.questionId });
    res.status(200).send(answers);
  } catch (err: any) {
    res.status(400).send("Error " + err);
  }
};
