import Hero from "./components/Hero.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Feature from "./components/Feature.jsx"
import "./HomeView.css";

function HomeView() {
  return (
    <div className="main">
      <div className="navbar">
        <Header />
      </div>
      <div className="hero-content">
        <Hero />
      </div>
      <div className="feature-rand">
        <Feature />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  )

}

export default HomeView;