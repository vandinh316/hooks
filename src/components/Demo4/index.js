import React, { useState } from "react";
import data from "./data";
import Questions from "./Questions";
import "./Demo4.scss";

function Demo4() {
  const [questions, setQuestions] = useState(data);

  if (questions.length === 0) {
    return (
      <div className="demo4">
        <div className="container">
          <h3>No Questions</h3>
          <button className="btn" onClick={() => setQuestions(data)}>
            Refesh
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="demo4">
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <div className="list-questions">
          {questions.map((question) => (
            <Questions key={question.id} {...question} />
          ))}
        </div>
        <button className="btn btn-clear" onClick={() => setQuestions([])}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default Demo4;
