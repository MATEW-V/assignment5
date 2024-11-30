import style1 from "./Feature.module.css";
import React, { useState, useEffect } from 'react';

function Feature() {
    const [movies, setMovies] = useState([]); 
    const randmovie = Math.floor(Math.random() * 13);
    const randpage = Math.floor(Math.random() * 21);
    const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=be3c7266366ad88b56a8397a0a3e668d&language=en-US&page=`+randpage;

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setMovies(data.results.slice(randmovie, randmovie+6)); // random movie then next six
            } catch (error) {
                setError('Failed to fetch movies');
            }
        };
        fetchMovies();
    }, []);

    return (
        <div className={style1.feature}>
            <div className={style1.nplay}>
                <h1>Now Playing</h1>
                <p>Check out the latest movies in theaters!</p>
            </div>
            <div className={style1.moviecontainer}>
                {movies.map((movie) => {
                    const movieImage = movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : 'https://via.placeholder.com/500x750?text=No+Image';

                    return (
                        <div className={style1.moviebox} key={movie.id}>
                            <img className={style1.movieposter} src={movieImage} alt={movie.title} />
                            <h3>{movie.title}</h3>
                            <a className={style1.detailbut}
                                href={`https://www.themoviedb.org/movie/${movie.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Details
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Feature;