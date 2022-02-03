import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [indexValue, setIndexValue] = useState(0);

  const fetchJobs = async () => {
    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return <section className='section loading'>Loading...</section>;
  }

  const { title, dates, duties, company } = jobs[indexValue];

  return (
    <section className='section'>
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        {/* btn container */}
        <aside className='btn-container'>
          {jobs.map((job, index) => {
            const { company } = job;
            return (
              <button
                key={index}
                onClick={() => setIndexValue(index)}
                className={`job-btn ${index === indexValue && 'active-btn'}`}
              >
                {company}
              </button>
            );
          })}
        </aside>
        {/* job info */}
        <article className='jobs-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='jobs-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon' />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
