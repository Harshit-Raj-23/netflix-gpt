import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import Header from "./Header.jsx";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
