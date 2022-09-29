import React, {useContext} from "react";
import Welcome from "./components/Welcome/Welcome";
import Questions from './components/Questions/Questions'
import { QuizContext } from './context/quiz'
import './App.css'

export const App = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return(
    <div className="App">
      {quizState.gameStage === 'Start' && <Welcome/>}
      {quizState.gameStage === 'Playing' && <Questions/>}
    </div>
  )
}