import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContents } from "../redux-store/contentSlice";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import ContentGrid from "../components/ContentGrid";

const Home = () => {
  const dispatch = useDispatch();
  const { allData } = useSelector((state) => state.content);

  useEffect(() => {
    dispatch(fetchContents());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="heading">Closet Store</h1>
      <SearchBar />
      <Filters />
      <ContentGrid data={allData} />
    </div>
  );
};

export default Home;
