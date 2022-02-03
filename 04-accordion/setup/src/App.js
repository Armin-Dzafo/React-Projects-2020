import React from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return (
    <main>
      <div className='container'>
        <h3>questions and answers</h3>
        <section className='info'>
          {data.map((item) => {
            const { id } = item;
            return <SingleQuestion key={id} {...item} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
