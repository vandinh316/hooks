import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import data from "./data";
import "./Demo1.scss";

function Demo1() {
  const [people, setPeople] = useState(data);

  const handleRemovePerson = (id) => {
    const newPeople = people.filter((item) => item.id !== id);
    setPeople(newPeople);
    toast.success("Remove done!");
  };
  return (
    <div className="demo1">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="container">
        <h1>{people.length} Birthday today</h1>
        {people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <div className="person" key={id}>
              <div className="person__image">
                <img src={image} alt={name} />
              </div>
              <div className="person__content">
                <h3 className="person__title">{name}</h3>
                <p className="person__age">{age}</p>
              </div>
              <span
                className="person__remove"
                onClick={() => handleRemovePerson(id)}
              >
                &times;
              </span>
            </div>
          );
        })}
        <button
          onClick={() => {
            setPeople([]);
            toast.success("Remove All done!");
          }}
        >
          Clear people
        </button>
      </div>
    </div>
  );
}

export default Demo1;
