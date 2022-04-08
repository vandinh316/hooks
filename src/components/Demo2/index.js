import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

import "./Demo2.scss";
const url = "https://course-api.com/react-tours-project";

function Demo2() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTour = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTour();
  }, []);

  if (loading) {
    return (
      <div className="demo2">
        <Loading />
      </div>
    );
  }
  if (tours.length === 0) {
    return (
      <div className="demo2">
        <div className="no-tour">
          <h2 className="general-title">No tours left</h2>
          <button className="btn" onClick={() => fetchTour()}>
            Refesh
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="demo2">
      <div className="container">
        <h2 className="general-title">Our Tour</h2>
        <div className="list-tours">
          <Tours tours={tours} removeTour={removeTour} />
        </div>
      </div>
    </div>
  );
}

export default Demo2;
