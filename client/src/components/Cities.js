import "../css/city.css";
import { Link } from "react-router-dom";
import { useState } from 'react'

export default function Cities({}) {

  const [city, setCity ] = useState('')

  function cityName(e){
    console.log(e.target.childNodes[0])
    setCity(city)
  }
  //   console.log(concerts)
  return (
    <div>
      <div className="cities-container">
        <div className="west-cities">
          <div className="city-title">
            <h1>West Coast</h1>
          </div>
          <div>
            <h2 className="underline">
              {" "}
              <Link to="/city" className="city" onClick={cityName} city={city}>
                San Diego, CA
              </Link>
            </h2>
            <h2 className="underline1">
              {" "}
              <Link to="/city" className="city" onClick={cityName} city={city}>
                San Francisco, CA
              </Link>
            </h2>
            <h2 className="underline2">
              <Link to="/city" className="city" onClick={cityName} city={city}>
                Los Angeles, CA
              </Link>
            </h2>
            <h2 className="underline3">
              <Link to="/city" className="city" onClick={cityName} city={city}>
                Seattle, WA
              </Link>
            </h2>
            <h2 className="underline4">
              <Link to="/city" className="city" onClick={cityName} city={city}>
                Denver, CO
              </Link>
            </h2>
          </div>
        </div>
        <div className="east-cities">
          <div className="city-title">
            <h1>East Coast</h1>
          </div>
          <div>
            <h2 className="underline">
              <Link to="/city" className="city" onClick={cityName} city={city}>
                New York City, NY
              </Link>
            </h2>
            <h2 className="underline1">
              <Link to="/city" className="city" onClick={cityName} city={city}>
                Charlotte, NC
              </Link>
            </h2>
            <h2 className="underline2">
              <Link to="/city" className="city" onClick={cityName} city={city}>
                Atlanta, GA
              </Link>
            </h2>
            <h2 className="underline3">
              <Link to="/city" className="city" onClick={cityName} city={city}>
                Miami, FL
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
