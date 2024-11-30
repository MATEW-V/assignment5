import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style6 from "./AllMoviesView.module.css";

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
    <div className={style6.moviescontainer}>
      {movies.map((movie) => (
        <div key={movie.id} className={style6.moviecard} onClick={() => { loadMovie(movie.id) }}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className={style6.movieposter}
          />
          <h3>{movie.title}</h3>
          <div className={style6.detailbut}>
            <Link to={`/movies/` + movie.id} className={style6.dbutton}>Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllMoviesView;