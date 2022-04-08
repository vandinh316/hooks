import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import reviewer from "./data";

function Reviewer() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviewer[index];

  const checkNumber = (number) => {
    if (number > reviewer.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviewer.length - 1;
    }
    return number;
  };
  const prevReviewer = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const nextReviewer = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const randomReviewer = () => {
    let randomIndex = Math.floor(Math.random() * reviewer.length);
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    setIndex(checkNumber(randomIndex));
  };

  return (
    <article className="reviewer">
      <div className="reviewer__img">
        <img src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <div className="reviewer__content">
        <h3 className="reviewer__name">{name}</h3>
        <p className="reviewer__job">{job}</p>
        <p className="reviewer__description">{text}</p>
        <div className="reviewer__button">
          <button className="reviewer__prev-btn" onClick={prevReviewer}>
            <FaChevronLeft />
          </button>
          <button className="reviewer__next-btn" onClick={nextReviewer}>
            <FaChevronRight />
          </button>
        </div>
        <button className="reviewer__random-btn" onClick={randomReviewer}>
          Random Reviewer
        </button>
      </div>
    </article>
  );
}

export default Reviewer;
