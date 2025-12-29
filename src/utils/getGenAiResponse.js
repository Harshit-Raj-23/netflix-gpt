import { API_OPTIONS, MODEL_INSTRUCTION } from "./constants.js";
import genAI from "./genAI.js";
import { addGptMovieResult } from "./gptSlice.js";

const searchMovieTMDB = async (movieName) => {
  const data = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=" +
      movieName +
      "&include_adult=false&language=en-US&page=1",
    API_OPTIONS
  );
  const json = await data.json();
  return json.results;
};

const getGenAiResponse = async (inputPrompt, dispatch) => {
  const response = await genAI.models.generateContent({
    model: "gemini-2.5-flash",
    contents: inputPrompt,
    config: {
      systemInstruction: MODEL_INSTRUCTION,
    },
  });

  if (!response.text) {
  }

  const movies = response.text.split(",").map((movie) => movie.trim());

  const promiseArray = movies.map((movie) => searchMovieTMDB(movie));

  const tmdbResult = await Promise.all(promiseArray);
  dispatch(addGptMovieResult({ movieNames: movies, movieResults: tmdbResult }));
};

export default getGenAiResponse;
