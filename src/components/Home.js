import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchGenres, fetchMoviesByGenre } from "../api";
import "../styles/Home.css";

function Home() {
  const [genres, setGenres] = useState([]);
  const [moviesByGenre, setMoviesByGenre] = useState({});

  useEffect(() => {
    const fetchAllGenres = async () => {
      const genresData = await fetchGenres();
      setGenres(genresData.genres);
    };
    fetchAllGenres();
  }, []);

  useEffect(() => {
    const fetchMoviesForGenres = async () => {
      const moviesData = {};

      for (const genre of genres) {
        const movies = await fetchMoviesByGenre(genre.id);
        moviesData[genre.id] = movies.results;
      }

      setMoviesByGenre(moviesData);
    };

    if (genres.length > 0) {
      fetchMoviesForGenres();
    }
  }, [genres]);

  return (
    <div className="home">
      {genres.map((genre) => (
        <div key={genre.id} className="genre-row">
          <h2>{genre.name}</h2>
          <div className="movies-row">
            {(moviesByGenre[genre.id] || []).slice(0, 5).map((movie) => (
              <Link to={`/movie/${movie.id}`} key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
