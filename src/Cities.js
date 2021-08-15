import React from "react";

const Cities = ({ filterItems, cities }) => {
  // console.log(filterItems);
  return (
    <div className="btn-container">
      {cities.map((city, index) => {
        return (
          <button
            key={index}
            className="filter-btn"
            onClick={() => filterItems(city)}
          >
            {city}
          </button>
        );
      })}
    </div>
  );
};

export default Cities;
