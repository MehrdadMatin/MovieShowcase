const API_KEY = "aa6e64f427e72716304188825189a58f";
const BASE_URL = "https://api.themoviedb.org/3";

const fetchJson = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export const getNewMovies = async () => {
  const url = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
  const data = await fetchJson(url);
  return data.results;
};

export const getMovieDetails = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=credits`;
  const data = await fetchJson(url);
  return data;
};

export const searchMovies = async (query) => {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
    query
  )}&page=1`;
  const data = await fetchJson(url);
  return data.results;
};
