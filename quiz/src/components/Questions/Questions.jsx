import React, { useState, useEffect } from "react";
import "./Questions.css";

const Questions = () => {
  const [countValue, setCountValue] = useState(3);

  useEffect(() => {
    setTimeout(() => {
      if(countValue >= 1){
        setCountValue(countValue - 1)
      }
      else{
        clearInterval()
        document.getElementById('questions').setAttribute("id", "noneStyle")
      }
    }, 1000);
  }, [countValue]);

  return <div id="questions">O jogo começará em: {countValue}</div>;
};

export default Questions;
