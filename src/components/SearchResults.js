import React, {useState, useEffect} from 'react';
import {useLocation, Link} from 'react-router-dom';
import axios from 'axios';

const SearchResults = () => {
    const [movies, setMovies] = useState([]);
    const searchQuery = new URLSearchParams(useLocation().search).get('query');

    useEffect(() => {
        if (searchQuery) {
            fetchSearchResults();
        }
    }, [searchQuery]);

    const fetchSearchResults = async () => {
        const response = await axios.get(
            'https://api.themoviedb.org/3/search/movie?api_key=aa6e64f427e72716304188825189a58f&query=${searchQuery}'
        );
        setMovies(response.data.results);
    };

    return (
        <div>
            <h1>Search Resulsts for "{searchQuery}"</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={'/movie/${movie.id}'}>
                            <img
                                src={'https://image.tmdb.org/t/p/w200/${movie.poster_path}'}
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

export default SearchResults;