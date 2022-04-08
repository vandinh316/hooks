import React from "react";
function Categories(props) {
  const { categories, filterCategory } = props;
  return (
    <div className="list-categories">
      <ul>
        {categories.map((category) => (
          <li
            key={category.toString()}
            onClick={() => filterCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
