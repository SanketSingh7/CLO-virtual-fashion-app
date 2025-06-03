import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../redux-store/contentSlice";

const filterOptions = ["Paid", "Free", "View Only"];

const Filters = () => {
  const dispatch = useDispatch();
  const selectedFilters = useSelector((state) => state.content.filters);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    let updatedFilters = [];

    if (checked) {
      updatedFilters = [...selectedFilters, value];
    } else {
      updatedFilters = selectedFilters.filter((f) => f !== value);
    }

    dispatch(setFilters(updatedFilters));
  };

  return (
    <div className="filters">
      Pricing Options:
      {filterOptions.map((option) => (
        <label key={option} className="filter-option">
          <input
            type="checkbox"
            value={option}
            onChange={handleCheckboxChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Filters;
