import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [flip, setFlip] = useState(false);

  const addCount = () => {
    if (count === 6) {
      setCount(0);
      setFlip(false);
    } else {
      setCount(count + 1);
      setFlip(false);
    }
    setCorrect("");
  };

  const cutCount = () => {
    if (count === 0) {
      setCount(6);
      setFlip(false);
    } else {
      setCount(count - 1);
      setFlip(false);
    }
    setCorrect("");
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

  const [answer, setAnswer] = useState("");
  const [correct, setCorrect] = useState("");

  const checkAnswer = () => {
    if (answer === cards[count].answer) {
      setCorrect("correct");
    } else {
      setCorrect("incorrect");
    }
  };

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
        <br /> (Hint: There may be 2 answers, answer in the format such as "1 or
        6")
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
      <div className="answer-div">
        <div className="answer-space" id={correct}>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
        <button onClick={checkAnswer}>Submit Answer</button>
      </div>
      <div className="button">
        <button onClick={cutCount}>Previous</button>
        <button onClick={addCount}>Next</button>
      </div>
    </div>
  );
};

export default App;
