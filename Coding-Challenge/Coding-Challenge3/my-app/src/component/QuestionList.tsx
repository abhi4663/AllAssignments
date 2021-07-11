import { Route, NavLink } from "react-router-dom";
import QuestionDetails from "./QuestionDetails";
import { useContext, useEffect } from "react";
import SearchBar from "./search-component";
import { ServiceManager } from "../services/service-layer";
import { QAContext } from "../context/useContext";

function QuestionList(props: any) {
  const { state } = useContext(QAContext);
  const { dispatch } = useContext(QAContext);

  const questions = state.questions;
  const searchedQuestions = state.searchedQuestions;

  const service = new ServiceManager();

  useEffect(() => {
    service.getAllQuestions(dispatch);
    // eslint-disable-next-line
  }, []);

  function searchQuestions(searchInput: any, selected: any, dispatch: any) {
    service.searchQuestions(searchInput, selected, dispatch);
  }

  return (
    <div>
      <SearchBar searchQuestions={searchQuestions} />

      {/* eslint-disable-next-line */}
      {state.isSearched
        ? searchedQuestions.map((question: any, index: any) => {
          return (
            <div>
              <NavLink className="abc" to={"/details/" + question._id} style={{ textDecoration: 'none' }}>
                <div

                  className="question-card"
                  id={question._id}
                  onClick={() => {
                    service.getQuestionById(dispatch, question._id);
                    // service.getAllAnswers(dispatch, question._id);
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
        })
        : questions.map((question: any, index: any) => {
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

export default QuestionList;
