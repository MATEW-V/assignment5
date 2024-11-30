import { Outlet, useNavigate } from "react-router-dom";
import style9 from "./MoviesView.module.css";

function MoviesView() {

  const navigate = useNavigate();

  function logout() {
    navigate("/");
  }

  return (
    <div className={style9.appcontainer}>
      <div className={style9.header}>
        <h1>Welcome, User!</h1>
        <button onClick={() => logout()} className={style9.logoutbutton}>Logout</button>
      </div>
      <Outlet />
    </div>
  );
}

export default MoviesView;