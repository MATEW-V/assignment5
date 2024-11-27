import { Link } from "react-router-dom";
import Hero from "./components/Hero.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./HomeView.css";

function HomeView() {
  return (
    <div className="main">
      <div className="navbar">
        <Header />
        <div className="buttons">
          <Link to={`/register`} className="button">Register</Link>
          <Link to={`/login`} className="button">Login</Link>
        </div>
      </div>
      <div className="hero-content">
        <Hero />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  )

}

export default HomeView;