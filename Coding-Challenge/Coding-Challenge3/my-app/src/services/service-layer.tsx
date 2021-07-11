import axios from "axios";

export class ServiceManager {
  getAllQuestions = async (dispatch: any) => {
    await axios
      .get("http://localhost:8000/api/question")
      .then(response => {
        dispatch({ type: "QUESTIONS_LIST", QuestionList: response.data });
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  getQuestionById = async (dispatch: any, id: any) => {
    await axios
      .get("http://localhost:8000/api/question/id/" + id)
      .then(response => {
        dispatch({ type: "QUESTION_DETAILS", selectedQuestion: response.data });
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  addQuestions = async (dispatch: any, question: any, token: any) => {
    let check = await axios.post(
      "http://localhost:8000/api/question",
      question,
      {
        headers: { "Content-Type": "application/json", Authorization: token },
      }
    );
    if (check.status === 200) {
      dispatch({ type: "ADDQUESTION", addQuestion: question });
    }
  };

  searchQuestions = async (searchInput: any, selected: any, dispatch: any) => {
    if (selected === "id") {
      axios
        .get("http://localhost:8000/api/question/id/" + searchInput)
        .then(response => {
          dispatch({
            type: "SEARCH_QUESTIONS_BY_ID",
            searchedQuestionsById: response.data,
          });
        })
        .catch(err => {
          console.log(err.message);
        });
    } else if (selected === "category") {
      axios
        .get("http://localhost:8000/api/question/categories/" + searchInput)
        .then(response => {
          dispatch({
            type: "SEARCH_QUESTIONS_BY_CATEGORY",
            searchedQuestionsByCategory: response.data,
          });
        })
        .catch(err => {
          console.log(err.message);
        });
    } else if (selected === "text") {
      axios
        .get("http://localhost:8000/api/question/text/" + searchInput)
        .then(response => {
          dispatch({
            type: "SEARCH_QUESTIONS_BY_TEXT",
            searchedQuestionsByText: response.data,
          });
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  };

  addAnswers = async (dispatch: any, answer: any, token: any) => {
    let check = await axios.post("http://localhost:8000/api/answer", answer, {
      headers: { "Content-Type": "application/json", Authorization: token },
    });
    if (check.status === 200) {
      dispatch({ type: "ADDANSWER", addAnswer: answer });
    }
  };
  getAllAnswers = async (dispatch: any, id: any) => {
    console.log(id, "id");

    await axios
      .get("http://localhost:8000/api/answer/questionId/" + id)
      .then(response => {
        dispatch({ type: "ANSWERS_LIST", AnswerList: response.data });
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  addUsers = async (user: any) => {
    console.log(user, "user1");

    await axios.post("http://localhost:8000/api/user/registration", user, {
      headers: { "Content-Type": "application/json" },
    });
  };
}
