import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";
import "./Demo9.scss";
const Demo9 = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <div className="demo9">
      <div className="container">
        <h3>color general</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="colors">
        {list.map((color, index) => (
          <SingleColor
            key={index}
            {...color}
            index={index}
            hexColor={color.hex}
          />
        ))}
      </div>
    </div>
  );
};

export default Demo9;
