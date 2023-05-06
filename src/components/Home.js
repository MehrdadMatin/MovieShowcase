import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=aa6e64f427e72716304188825189a58f&language=en-US&page=1"
      );
      const data = await response.json();
      setMovies(data.results);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>New Releases</h1>
      <div>
        {movies.map((movie) => (
          <Link to={"/movie/" + movie.id} key={movie.id}>
            <img
              src={"https://image.tmdb.org/t/p/w200" + movie.poster_path}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
