import Question from "../models/questionSchema";

export const getAllquestions = async (req: any, res: any) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err: any) {
    res.status(400).send("Error " + err.message);
  }
};

export const addNewquestion = async (req: any, res: any) => {
  const questions = new Question(req.body);

  try {
    const a = await questions.save();
    // res.status(200).send("question is Added Successfully...");
    res.json(a);
  } catch (err: any) {
    // res.status(400).send("Error", err.message);
    res.send(err.message);
  }
};

export const getQuestionByCategory = async (req: any, res: any) => {
  try {
    const categories = new RegExp(req.params.categories, "i");
    const questions = await Question.find({ categories });
    res.status(200).send(questions);
  } catch (err: any) {
    res.status(400).send("Error " + err);
  }
};

export const getQuestionById = async (req: any, res: any) => {
  try {
    const questions = await Question.findById(req.params.id);
    res.status(200).send(questions);
  } catch (err: any) {
    res.status(400).send("Error " + err);
  }
};

export const getQuestionByText = async (req: any, res: any) => {
  try {
    const question = new RegExp(req.params.question, "i");
    const questions = await Question.find({ question });
    res.status(200).send(questions);
  } catch (err: any) {
    res.status(400).send("Error " + err);
  }
};
