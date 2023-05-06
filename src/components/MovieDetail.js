import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=aa6e64f427e72716304188825189a58f&append_to_response=credits`
      );
      const data = await response.json();
      setMovie(data);
    };

    fetchData();
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  const mainCast = movie.credits.cast.slice(0, 5).map((actor) => actor.name).join(', ');

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Release Date: {movie.release_date}</p>
      <p>Duration: {movie.runtime} minutes</p>
      <p>Main Cast: {mainCast}</p>
    </div>
  );
}

export default MovieDetail;
