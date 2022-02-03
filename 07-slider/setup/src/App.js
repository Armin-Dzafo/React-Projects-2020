import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [indexValue, setIndexValue] = useState(0);

  // guarding the scope of the 'people' array
  useEffect(() => {
    if (indexValue < 0) {
      setIndexValue(people.length - 1);
    } else if (indexValue > people.length - 1) {
      setIndexValue(0);
    }
  }, [indexValue, people]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndexValue(indexValue + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [indexValue]);

  return (
    <section>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          // add css classes to articles
          let articleClass = 'nextSlide';
          if (personIndex === indexValue) {
            articleClass = 'activeSlide';
          }
          if (
            personIndex === indexValue - 1 ||
            (indexValue === 0 && personIndex === people.length - 1)
          ) {
            articleClass = 'lastSlide';
          }
          return (
            <article key={id} className={articleClass}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}
        <button className='prev' onClick={() => setIndexValue(indexValue - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndexValue(indexValue + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
