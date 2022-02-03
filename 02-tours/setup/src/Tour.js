import React, { useState } from 'react';

const Tour = (props) => {
  const [fullText, setFullText] = useState(false);
  const { tour, removeTour } = props;
  return (
    <section className='single-tour'>
      <img src={tour.image} alt={tour.name} />
      <aside>
        <div className='tour-info'>
          <h4>{tour.name}</h4>
          <h4 className='tour-price'>{tour.price}</h4>
        </div>
        <p>
          {fullText ? tour.info : `${tour.info.substring(0, 150)}...`}
          <button onClick={() => setFullText(!fullText)}>
            {fullText ? 'show less' : 'read more'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(tour.id)}>
          not interested
        </button>
      </aside>
    </section>
  );
};

export default Tour;
