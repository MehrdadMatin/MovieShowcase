import React, {useState, useEffect} from 'react';
import axios from 'axios';

const MovieDetail = ({ match }) => {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetchMovieDetails();
    }, []);

    const fetchMovieDetails = async () => {
        const response = await axios.get(
            'https://api.themoviedb.org/3/movie/${match.params.movieId}?api_key=aa6e64f427e72716304188825189a58f&append_to_response=credits'
        );
        setMovie(response.data);
    };

    const mainCast = movie.credits?.cast.slice(0, 5).map((actor) => actor.name).join(', ');

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>Release date: {movie.release_date}</p>
            <p>Duration: {movie.runtime} minutes</p>
            <h2>Main Cast</h2>
            <p>{mainCast}</p>
        </div>
    );
};

export default MovieDetail;