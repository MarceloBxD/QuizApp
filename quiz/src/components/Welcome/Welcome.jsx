import React from "react";
import "./Welcome.css";
import Quiz from "../../images/quiz.svg";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

const Welcome = () => {
    // dispatch para conseguir entrar no reducer e executar o switch, como se fosse um usestate para alterar os valores
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Quiz de Programação</h2>
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar o quiz!</p>
      <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Clique aqui!</button>
      <img src={Quiz} alt="Quiz Img" />
    </div>
  );
};

export default Welcome;
