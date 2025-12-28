import React from "react";
import GptSearchBar from "./GptSearchBar.jsx";
import { BG_URL } from "../utils/constants.js";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_URL} alt="BG-IMG" />
      </div>
      <GptSearchBar />
    </div>
  );
};

export default GptSearchPage;
