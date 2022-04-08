import React, { useState, useEffect } from "react";
import Alert from "./Alert";
import List from "./List";
import "./Demo10.scss";

const getLocalStorage = () => {
  let lists = localStorage.getItem("list");
  const result = lists ? JSON.parse(lists) : [];
  return result;
};

const Demo10 = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      showAlert(true, "danger", "please enter value");
    } else if (text && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return {
              ...item,
              title: text,
            };
          }
          return item;
        })
      );
      setText("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    } else {
      showAlert(true, "success", "item added to the list");
      const newItem = { id: new Date().getTime().toString(), title: text };

      setList([...list, newItem]);
      setText("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setText(specificItem.title);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <div className="demo10">
      <div className="container">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}
          <h3>Grocery bud</h3>
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              placeholder="e.g eggs"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button className="submit-btn">
              {isEditing ? "edit" : "submit"}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="grocery-container">
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button className="clear-btn" onClick={clearList}>
              clear items
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Demo10;
