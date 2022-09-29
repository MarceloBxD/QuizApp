import { createContext, useReducer } from "react";
import question from "../data/questions";

export const QuizContext = createContext();

const Stages = ["Start", "Playing", "End"];

const initialState = {
  gameStage: Stages[0],
  question,
};

const quizReducer = (state, action) => {

  console.log(state, action)

  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        gameStage: Stages[1]
      };

    default:
      return state;
  }
};

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
