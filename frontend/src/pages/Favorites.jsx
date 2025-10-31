import { useEffect, useState } from "react";
import { disPlayFavorites, deleteFavorite } from "../services/api";
import FavoriteCard from "../components/FavoriteCard";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  // Fetch favorites from Django
  const getFavorite = async () => {
    try {
      const favorites_movies = await disPlayFavorites();
      setFavorites(favorites_movies);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFavorite();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteFavorite(id);
      setFavorites(favorites.filter((fav) => fav.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="favorites">
      {favorites.map((favorite) => (
        <FavoriteCard
          favorite={favorite}
          key={favorite.id}
          onDelete={() => handleDelete(favorite.id)}
        />
      ))}
    </div>
  );
}

export default Favorites;
