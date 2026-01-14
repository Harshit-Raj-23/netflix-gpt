import React from "react";
import GptSearchBar from "./GptSearchBar.jsx";
import { BG_URL } from "../utils/constants.js";
import GptMovieSuggestion from "./GptMovieSuggestion.jsx";

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover md:w-screen"
          src={BG_URL}
          alt="BG-IMG"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearchPage;
