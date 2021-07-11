import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { QAContext } from "../context/useContext";
import { ServiceManager } from "../services/service-layer";

function QuestionDetails(props: any) {
  const { state } = useContext(QAContext);
  let selectedQuestion = state.selectedQuestion;
  const answers = state.answers;
  const service = new ServiceManager();

  const { dispatch } = useContext(QAContext);
  const history = useHistory();

  return (
    <div>
      <div className="card card-details">
        <p>
          <strong>Asked By : </strong>
          {selectedQuestion.askedUser}
        </p>
        <p>
          <strong> Total Votes :</strong>
          {selectedQuestion.voteCount}
        </p>
        <button className="Add">Add Answer</button>
        <br />
        <p>
          {/* eslint-disable-next-line */}
          {answers.map((answer: any) => {
            if (answer.questionId === selectedQuestion._id) {
              return (
                <div className="answered">
                  <p>
                    <strong>Answer : </strong>
                    {answer.answer}
                  </p>
                  <p>
                    <strong>Answered By : </strong>
                    {answer.answeredUserId}
                  </p>
                  <p>
                    <strong> Total Votes :</strong>
                    {answer.voteCount}
                  </p>
                  <br />
                  <br />
                  <hr />
                </div>
              );
            }
          })}
        </p>
      </div>
    </div>
  );
}

export default QuestionDetails;
