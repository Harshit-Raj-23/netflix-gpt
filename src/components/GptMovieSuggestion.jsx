import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList.jsx";
import Shimmer from "./Shimmer.jsx";

const GptMovieSuggestion = () => {
  const { movieNames, movieResults, isLoading } = useSelector(
    (store) => store.gpt,
  );

  if (isLoading) return <Shimmer />;
  if (!movieNames) return;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
