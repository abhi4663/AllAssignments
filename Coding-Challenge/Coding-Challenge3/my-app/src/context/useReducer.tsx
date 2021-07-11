export const Reducer = (state: any, action: any): any => {
  switch (action.type) {
    case "QUESTIONS_LIST":
      return {
        ...state,
        searchedQuestions: [],
        questions: action.QuestionList,
      };
    case "ADDQUESTION":
      return {
        ...state,
        questions: [...state.questions, action.addQuestion],
      };
    case "QUESTION_DETAILS":
      // console.log(action.selectedQuestion, "a");

      return {
        ...state,
        selectedQuestion: action.selectedQuestion,
      };
    case "SEARCH_QUESTIONS_BY_ID":
      return {
        ...state,
        isSearched: true,
        searchedQuestions: action.searchedQuestionsById,
      };
    case "SEARCH_QUESTIONS_BY_CATEGORY":
      return {
        ...state,
        isSearched: true,
        searchedQuestions: action.searchedQuestionsByCategory,
      };
    case "SEARCH_QUESTIONS_BY_TEXT":
      return {
        ...state,
        isSearched: true,
        searchedQuestions: action.searchedQuestionsByText,
      };
    case "ADDANSWER":
      return {
        ...state,
        answers: [...state.answers, action.addAnswer],
      };
    case "ANSWERS_LIST":
      return {
        ...state,
        answers: action.AnswerList,
      };
    default:
      return state;
  }
};
