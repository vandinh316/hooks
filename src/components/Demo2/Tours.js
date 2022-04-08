import React, { useState } from "react";
function Tour(props) {
  const [readMore, setReadMore] = useState(true);
  const { tours, removeTour } = props;
  return tours.map((tour) => {
    const { id, name, info, image, price } = tour;
    return (
      <article className="tour" key={id}>
        <div className="tour__image">
          <img src={image} alt={name} />
        </div>
        <div className="tour__content">
          <div className="tour__title-price">
            <h3 className="tour__title">{name}</h3>
            <span className="tour__price">${price}</span>
          </div>
          <div className="tour__description">
            {readMore ? `${info.substring(0, 200)}...` : info}
            <span className="read-more" onClick={() => setReadMore(!readMore)}>
              {readMore ? " Read More" : " Show Less"}
            </span>
          </div>
          <button className="btn" onClick={() => removeTour(id)}>
            Remove Tour
          </button>
        </div>
      </article>
    );
  });
}

export default Tour;
