import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import style6 from "./GenreLogin.module.css";
import GenreView from "./components/GenreView.jsx";
import Footer from "./components/Footer.jsx";

function GenreLogin() {
  const [movies, setMovies] = useState([]);
  const [selectedGenreId, setSelectedGenreId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      const url = selectedGenreId
        ? `https://api.themoviedb.org/3/discover/movie?api_key=be3c7266366ad88b56a8397a0a3e668d&with_genres=${selectedGenreId}`
        : `https://api.themoviedb.org/3/movie/now_playing?api_key=be3c7266366ad88b56a8397a0a3e668d`; 
      
      const response = await axios.get(url);
      setMovies(response.data.results);
    };

    fetchMovies();
  }, [selectedGenreId]); 

  function loadMovie(id) {
    navigate(`/movies/${id}`);
  }

  const genres = [
    { genre: "Action", id: 28 },
    { genre: "Animation", id: 16 },
    { genre: "Comedy", id: 35 },
    { genre: "Family", id: 10751 },
    { genre: "History", id: 36 },
    { genre: "Horror", id: 27 },
    { genre: "Music", id: 10402 },
    { genre: "Science Fiction", id: 878 },
    { genre: "Thriller", id: 53 },
    { genre: "War", id: 10752 },
    { genre: "Western", id: 37 },
  ];

  const handleGenreClick = (genreId) => {
    setSelectedGenreId(genreId);
  };

  return (
    <div className={style6.appcontainer}>
      <div className={style6.header}>
        <Header />
      </div>
      <div className={style6.loginfeat}>
        <div className={style6.genrelist}>
          <GenreView genresList={genres} onGenreClick={handleGenreClick} />
        </div>
        <div className={style6.genredisp}>
          {movies.map((movie) => (
            <div
              key={movie.id}
              className={style6.moviecard}
              onClick={() => {
                loadMovie(movie.id);
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className={style6.movieposter}
              />
              <h3>{movie.title}</h3>
              <div className={style6.detailbut}>
                <Link to={`/movies/` + movie.id} className={style6.dbutton}>
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={style6.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default GenreLogin;
