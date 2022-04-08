import React, { useState } from "react";
import data from "./data";
import "./Demo8.scss";

const Demo8 = () => {
  const [text, setText] = useState([]);
  const [value, setValue] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amout = +value;
    if (value <= 0) {
      amout = 1;
    }
    if (value > data.length) {
      amout = data.length;
    }
    setText(data.slice(0, amout));
  };
  return (
    <div className="demo8">
      <div className="container">
        <h2 className="general-title">tired of boring lorem ipsum?</h2>

        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="number">Paragraphs</label>
          <input
            type="number"
            id="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="btn">Generate</button>
        </form>

        <article className="lorem-text">
          {text.map((lorem, id) => (
            <p key={id}>{lorem}</p>
          ))}
        </article>
      </div>
    </div>
  );
};

export default Demo8;
