import React from 'react';
import Tour from './Tour';
const Tours = (props) => {
  const { tours, removeTour } = props;
  return (
    <section>
      <article className='title'>
        <h2>our tours</h2>
        <div className='underline'></div>
      </article>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} tour={tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
