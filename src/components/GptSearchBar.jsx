import React, { useRef } from "react";
import LANG from "../utils/languageConstants.js";
import { useDispatch, useSelector } from "react-redux";
import getGenAiResponse from "../utils/getGenAiResponse.js";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);

  const handleGptSearchButton = async () => {
    await getGenAiResponse(searchText?.current?.value, dispatch);
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 bg-black grid grid-cols-12"
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9 rounded-md"
          type="text"
          placeholder={LANG[langKey].gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearchButton}
          className="py-2 px-4 my-4 mr-4 col-span-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700"
        >
          {LANG[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
