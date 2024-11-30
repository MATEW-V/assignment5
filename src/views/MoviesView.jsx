import { Outlet, useNavigate } from "react-router-dom";
import style from "./MoviesView.module.css";

function MoviesView() {

  const navigate = useNavigate();

  function logout() {
    navigate("/");
  }

  return (
    <div className={style.app-container}>
      <div className={style.header}>
        <h1>Welcome, User!</h1>
        <button onClick={() => logout()} className="logout-button">Logout</button>
      </div>
      <Outlet />
    </div>
  );
}

export default MoviesView;