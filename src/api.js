const API_KEY = "aa6e64f427e72716304188825189a58f";

const fetchNewMovies = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.json();
    return data;
};

const fetchGenres = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.json();
    return data;
  };
  
  const fetchMoviesByGenre = async (genreId) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`
    );
    const data = await response.json();
    return data;
  };
  
  const fetchMovieDetails = async (movieId) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=credits`
    );
    const data = await response.json();
    return data;
  };
  
  const searchMovies = async (searchQuery) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
    );
    const data = await response.json();
    return data;
  };
  
  export { fetchNewMovies, fetchGenres, fetchMoviesByGenre, fetchMovieDetails, searchMovies };