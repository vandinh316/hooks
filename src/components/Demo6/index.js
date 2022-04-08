import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import "./Demo6.scss";
const url = "https://course-api.com/react-tabs-project";

const Demo6 = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJob = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJob();
  }, []);

  if (loading) {
    return (
      <div className="demo6">
        <div className="container">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }

  const { company, dates, duties, title } = jobs[value];
  return (
    <div className="demo6">
      <div className="container">
        <h2 className="general-title">experience</h2>
        <div className="jobs-center">
          <div className="btn-container">
            {jobs.map((job, index) => (
              <button
                className={`job-btn ${index === value && "active-btn"}`}
                key={job.id}
                onClick={() => setValue(index)}
              >
                {job.company}
              </button>
            ))}
          </div>
          <article className="job-intro">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            ))}
          </article>
        </div>
      </div>
    </div>
  );
};

export default Demo6;
