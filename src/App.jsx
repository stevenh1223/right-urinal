import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [flip, setFlip] = useState(false);

  const updateCount = () => {
    setCount(Math.floor(Math.random() * 7));
    setFlip(false);
  };

  const changeFlip = () => {
    setFlip(!flip);
  };

  const currentSide = () => {
    return flip ? "answer" : "question";
  };

  const cards = [
    { question: "../public/answer1.png", answer: "1" },
    { question: "../public/answer1or6.png", answer: "1 or 6" },
    { question: "../public/answer2.png", answer: "2" },
    { question: "../public/answer3or4.png", answer: "3 or 4" },
    { question: "../public/answer6.png", answer: "6" },
    { question: "../public/answerAlso1.png", answer: "1" },
    { question: "../public/answerAlso2.png", answer: "2" },
  ];

  return (
    <div className="App">
      <h1>Picking the Right Urinal</h1>
      <h2>
        Try to pick the right urinal according to the urinal rule for men!
      </h2>
      <p>
        Reference: &nbsp;
        <a
          href="https://www.youtube.com/watch?app=desktop&v=IR-qQxA6qoA"
          target="_blank"
        >
          The Man's Book by Thomas Fink on Picking the Right Urinal
        </a>
        <br /> Number of cards: 7
      </p>
      <div className="flip-card" onClick={changeFlip}>
        <div className="flip-card-inner">
          <div className={currentSide()}>
            <div className="image">
              <img src={cards[count].question} alt="restroom" />
            </div>
            <div className="back">
              <h3>Answer:</h3>
              <p>{cards[count].answer}</p>
            </div>
          </div>
        </div>
      </div>

      <button onClick={updateCount}>Next</button>
    </div>
  );
};

export default App;
