import React, { useReducer } from "react";
import { Reducer } from "./useReducer";

export const QAContext = React.createContext<any>({});

export const QAProvider = (props: any) => {
  const [state, dispatch] = useReducer(Reducer, {}, () => {
    return {
      questions: [],
      answers: [],
      selectedQuestion: [],
      searchedQuestions: [],
      searchInput: "",
      selected: "",
      isSearched: false,
    };
  });

  return (
    <QAContext.Provider value={{ state, dispatch }}>
      {props.children}
    </QAContext.Provider>
  );
};
