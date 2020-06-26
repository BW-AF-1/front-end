import React from "react";
import ClassSearch from "./ClassSearch";

const FilterType = ({ value, handleChange }) => {
  return (
    <>
      <div>
        Class type: <input value={value} onChange={handleChange} />
      </div>
    </>
  );
};

export default FilterType;
