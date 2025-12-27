import React, { useEffect } from "react";
import Header from "./Header.jsx";
import { TMDB_API, API_OPTIONS } from "../utils/constants.js";

const Browse = () => {
  const getNowPlayingMovies = async () => {
    const data = await fetch(TMDB_API, API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
