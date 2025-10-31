import { useEffect, useState } from "react";
import MovieCard from "../components/Moviecard";
import { getMovies } from "../services/api";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);

  const getPopularMovies = async () => {
    try {
      const popularMovies = await getMovies();
      setMovies(popularMovies);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchInput);
  };

  return (
    <div className="main">
      <form onSubmit={handleSearch}>
        <input
          placeholder="Search for a movie..."
          onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
          value={searchInput}
        />
        <button>Search</button>
      </form>

      <div className="movies">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchInput) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
};

export default Home;
