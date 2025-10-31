import { addToFavorites } from "../services/api";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="favorite-icon" onClick={() => addToFavorites(movie.id)}>
        <span>♡</span>
      </div>
      <div className="movie-img">
        <img src={`http://127.0.0.1:8000${movie.cover_image}`} alt={movie.title} />
      </div>
      <h3>{movie.title}</h3>
      <span>{movie.release_date}</span>
    </div>
  );
}


export default MovieCard;