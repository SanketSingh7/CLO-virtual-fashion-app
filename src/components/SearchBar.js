import React from "react";
import { useDispatch } from "react-redux";
import { setKeyword } from "../redux-store/contentSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setKeyword(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Find the item you're looking for"
      onChange={handleChange}
      className="search-bar"
    />
  );
};

export default SearchBar;
