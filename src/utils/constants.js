export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/f86b16bf-4c16-411c-8357-22d79beed09c/web/IN-en-20251222-TRIFECTA-perspective_d4acb127-f63f-4a98-ad0b-4317b0b3e500_large.jpg";

export const USER_AVATAR =
  "https://testingbot.com/free-online-tools/random-avatar/200?u=";

export const TMDB_API = "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_API_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "हिंदी" },
  { identifier: "spanish", name: "español" },
];

export const MODEL_INSTRUCTION =
  "Act as a movie recommendation system where you have to recommend 5 best movies for the query. Give me the name of the movies only in the format I specified in example. Example - movie1, movie2, movie3, movie4, movie5";
