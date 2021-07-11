import { QAContext } from "../context/useContext";
import { useContext, useEffect } from "react";
import { ServiceManager } from "../services/service-layer";
import { Route, NavLink } from "react-router-dom";
import QuestionDetails from "./QuestionDetails";

function Home(props: any) {
  const { state } = useContext(QAContext);
  const { dispatch } = useContext(QAContext);
  const service = new ServiceManager();

  const questions = state.questions;
  const reversedArray = questions.reverse();
  console.log(reversedArray);

  useEffect(() => {
    service.getAllQuestions(dispatch);
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h4><u>Latest 10 Questions : </u></h4>
      {/* eslint-disable-next-line */}
      {reversedArray.map((question: any, index: any) => {
        return (
          <div>
            <NavLink to={"/details/" + question._id}>
              <div
                className="question-card"
                id={question._id}
                onClick={() => {
                  service.getQuestionById(dispatch, question._id);
                  service.getAllAnswers(dispatch, question._id);
                }}
              >
                <br />
                <h3>{question.question}</h3>
                <br />
              </div>
            </NavLink>
            <Route
              path={"/details/" + question._id}
              component={QuestionDetails}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
