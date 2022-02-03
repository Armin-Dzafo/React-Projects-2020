import React from 'react';

const Categories = ({ allCategories, filteredItems }) => {
  return (
    <div className='btn-container'>
      {allCategories.map((category, index) => {
        return (
          <button
            className='filter-btn'
            type='button'
            key={index}
            onClick={() => filteredItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
