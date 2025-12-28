import React from "react";
import LANG from "../utils/languageConstants.js";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9 rounded-md"
          type="text"
          placeholder={LANG[langKey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 my-4 mr-4 col-span-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700">
          {LANG[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
