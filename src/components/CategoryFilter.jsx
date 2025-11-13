import React from "react";

const CategoryFilter = ({ categories, selected, onSelect }) => {
  return (
    <div className="flex justify-center gap-4 flex-wrap p-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
            selected === category
              ? "bg-blue-600 text-white shadow-lg scale-105"
              : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
