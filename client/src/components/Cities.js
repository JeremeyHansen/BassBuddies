import "../css/city.css";
import { Link } from "react-router-dom";

export default function Cities() {
  const westCities = [
    {
      city: "Denver",
      state: "CO",
      cityId: 76
    },
    {
      city: "Los Angeles",
      state: "CA",
      cityId: 73
    },
    {
      city: "San Diego",
      state: "CA",
      cityId: 81
    },
    {
      city: "San Francisco",
      state: "CA",
      cityId: 72
    },
    {
      city: "Seattle",
      state: "WA",
      cityId: 77
    },
  ];
  const eastCities = [
    {
      city: "Atlanta",
      state: "GA",
      cityId: 84
    },
    {
      city: "Charlotte",
      state: "NC",
      cityId: 101
    },
    {
      city: "Chicago",
      state: "IL",
      cityId: 70
    },
    {
      city: "Miami",
      state: "FL",
      cityId: 87
    },
    {
      city: "New York City",
      state: "NY",
      cityId: 70
    },
  ];

  return (
    <div>
      <div className="cities-container">
        <div className="west-cities">
          <div className="city-title">
            <h1>West Coast</h1>
          </div>
          <div>
            {westCities.map((city) => {
              return (
                <h2 className={city.state} key={city.id}>
                  <Link to="/city" className="city" state={{ city }}>
                    {city.city}, {city.state}
                  </Link>
                </h2>
              );
            })}
          </div>
        </div>
        <div className="east-cities">
          <div className="city-title">
            <h1>East Coast</h1>
          </div>
          <div>
            {eastCities.map((city) => {
              return (
                <h2 className={city.state} key={city.id}>
                  <Link to="/city" className="city" state={{ city }}>
                    {city.city}, {city.state}
                  </Link>
                </h2>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
