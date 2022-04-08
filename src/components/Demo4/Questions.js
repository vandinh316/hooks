import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Questions(props) {
  const { title, info } = props;
  const [show, setShow] = useState(true);

  return (
    <article className="question">
      <div className="question__title-btn" onClick={() => setShow(!show)}>
        <h4 className="question__title">{title}</h4>
        <button className="question__btn">
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {show && <div className="question__info">{info}</div>}
    </article>
  );
}

export default Questions;
