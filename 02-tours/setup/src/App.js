import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchToursData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const fetchedTours = await response.json();
      setTours(fetchedTours);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchToursData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no more tours</h2>
          <button className='btn' onClick={fetchToursData}>
            reload
          </button>
        </div>
      </main>
    );
  }

  return <Tours tours={tours} removeTour={removeTour} />;
}

export default App;
