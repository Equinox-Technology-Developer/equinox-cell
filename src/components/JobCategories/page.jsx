// components/JobCategories.js
import React from 'react';

const JobCategories = ({
  categories,
  selectedCategory,
  handleCategoryClick,
}) => {
  return (
    <div>
      <button onClick={() => handleCategoryClick('')}>All Jobs</button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={selectedCategory === category ? 'active' : ''}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default JobCategories;
