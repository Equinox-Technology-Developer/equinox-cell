// components/JobCategories.js
import React from 'react';

const JobCategories = ({
  categories,
  selectedCategory,
  handleCategoryClick,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 ">
      <button
        onClick={() => handleCategoryClick('')}
        className={`mr-2 rounded-full px-4 py-2 ${selectedCategory === '' ? 'bg-secondary-500 text-white' : ' text-gray-700'}`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={` mr-2  rounded-full px-4 py-2 text-lg font-medium ${selectedCategory === category ? 'bg-secondary-500 text-white' : ' text-black-300'}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default JobCategories;
