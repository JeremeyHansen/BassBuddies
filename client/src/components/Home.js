import "../css/home.css";
import { Link } from "react-router-dom";

export default function Home() {
  function handleClick() {}
  return (
    <div className="home-container">
      <div className="home-text">
      <div className="main-text">Mom Can You Pick Me Up, The Bass Is Too Loud.</div>
      <button onClick={handleClick} className="find-shows-btn">
        <Link to="/cities" className="shows-text">
          Find Shows
        </Link>
      </button>
      </div>
      <div className="home-line1"></div>
      <div className="home-line2"></div>
      <div className="home-line3"></div>
      <div className="home-line4"></div>
      <div className="home-line5"></div>
      <div className="home-line6"></div>
      <div className="home-line7"></div>
      <div className="home-line8"></div>
      <div className="home-line9"></div>
      <div className="home-line10"></div>
    </div>
  );
}
