const BASE_URL = "http://127.0.0.1:8000/";

export const getMovies = async () => {
  const response = await fetch(`${BASE_URL}display-movies/`);
  const data = await response.json();
  return data;
};

export const addToFavorites = async (movie_id) => {
    console.log(movie_id)
  const response = await fetch(`${BASE_URL}add-favorites/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ movie_id: movie_id }),
  });
  
  const data = await response.json();

  return data
};

export const disPlayFavorites = async () => {
    const response = await fetch(`${BASE_URL}display-favorites/`)
    const data = await response.json()
    return data
}


export const deleteFavorite = async (favorite_id) => {
    const response = await fetch(`${BASE_URL}delete-favorite/${favorite_id}/`, {
        method: "DELETE",
    });
    const data = await response.json();
    return data;
}