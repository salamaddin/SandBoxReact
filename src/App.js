import "./styles.css";
import React, { useState } from "react";

const QuizGame = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Paris", "Rome", "Madrid"],
      answer: "Paris",
    },
    {
      question: "What is the currency of Japan?",
      options: ["Dollar", "Euro", "Yen", "Pound"],
      answer: "Yen",
    },
    {
      question: "What is the highest mountain in the world?",
      options: [
        "Mount Kilimanjaro",
        "Mount Everest",
        "Mount Fuji",
        "Mount Whitney",
      ],
      answer: "Mount Everest",
    },
  ];

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[questionIndex].answer) {
      setScore(score + 1);
    }
    setQuestionIndex(questionIndex + 1);
  };

  const currentQuestion = questions[questionIndex];

  return (
    <div>
      <h1>Quiz Game</h1>
      {questionIndex < questions.length ? (
        <div>
          <h2>{currentQuestion.question}</h2>
          {currentQuestion.options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2>Quiz finished</h2>
          <p>Your score is {score}</p>
        </div>
      )}
    </div>
  );
};

export default QuizGame;
