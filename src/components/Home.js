import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchNowPlayingMovies();
    }, []);

    const fetchNowPlayingMovies = async() => {
        const response = await axios.get(
            'https://api.themoviedb.org/3/movie/now_playing?api_key=aa6e64f427e72716304188825189a58f'
        );
        setMovies(response.data.results);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery) {
            window.location.href = '/search?query=${searchQuery}';
        }

    };

    return (
        <div>
            <h1> New Movie Releases </h1>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    value={searchQ}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for a movie..."
                />
                <input type="submit" value="Search" />
            </form>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={'/movie/${movie.id}'}>
                            <img
                                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                                alt={'${movie.title} poster'}
                                />
                                <span>{movie.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;