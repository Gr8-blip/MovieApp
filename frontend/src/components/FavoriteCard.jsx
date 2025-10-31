function FavoriteCard({ favorite, onDelete }) {
  return (
    <div className="favorite-card">
      <div className="favorite-card-image">
        <img
          src={`http://127.0.0.1:8000${favorite.movie.cover_image}`}
          alt={favorite.movie.title}
        />
      </div>
      <div className="favorite-details">
        <h2>{favorite.movie.title}</h2>
        <span>{favorite.movie.release_date}</span>
      </div>
      <button onClick={onDelete}>Remove from favorites</button>
    </div>
  );
}

export default FavoriteCard;
