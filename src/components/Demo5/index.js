import React, { useState } from "react";
import items from "./data";
import Categories from "./Categories";
import Menu from "./Menu";
import "./Demo5.scss";

const allCategories = ["all", ...new Set(items.map((cats) => cats.category))];
// console.log(allCategories);

function Demo5() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const filterCategory = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newCategory = items.filter((cats) => cats.category === category);
    setMenuItems(newCategory);
  };
  return (
    <div className="demo5">
      <div className="container">
        <h2 className="general-title">Our Menu</h2>

        <Categories categories={categories} filterCategory={filterCategory} />
        <Menu items={menuItems} />
      </div>
    </div>
  );
}

export default Demo5;
