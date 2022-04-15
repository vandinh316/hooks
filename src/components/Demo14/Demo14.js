import React from "react";
import { useGlobalContext } from "./context";

import Navbar from "./Navbar";
import CartContainer from "./CartContainer";

const Demo14 = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="demo14">
      <Navbar />
      <CartContainer />
    </div>
  );
};

export default Demo14;
