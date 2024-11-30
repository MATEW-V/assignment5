import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from"./AllMoviesView.module.css";

function AllMoviesView() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    (async function getMovies() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=be3c7266366ad88b56a8397a0a3e668d`
      );
      setMovies(response.data.results);
    })();
  }, []);

  function loadMovie(id) {
    navigate(`/movies/${id}`);
  }

  return (
    <div className={style.movies-container}>
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card" onClick={() => { loadMovie(movie.id) }}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className={style.movie-poster}
          />
        </div>
      ))}
    </div>
  );
}

export default AllMoviesView;