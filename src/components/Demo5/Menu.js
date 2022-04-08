import React from "react";
function Menu(props) {
  const { items } = props;
  return (
    <div className="list-items">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className="item">
            <div className="item__img">
              <img src={img} alt={title} className="photo" />
            </div>
            <div className="item__info">
              <div className="item__title-price">
                <h4 className="item__title">{title}</h4>
                <h4 className="item__price">${price}</h4>
              </div>
              <p className="item__text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;
