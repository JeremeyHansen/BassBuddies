import "../css/city.css";
import { Link } from "react-router-dom";

export default function Cities({concerts}) {


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
              <Link to="/sandiego" className="city" concerts={concerts}>
                San Diego, CA
              </Link>
            </h2>
            <h2 className="underline1">
              {" "}
              <Link to="/sf" className="city">
                San Francisco, CA
              </Link>
            </h2>
            <h2 className="underline2">
              <Link to="/la" className="city">
              Los Angeles, CA
              </Link>
            </h2>
            <h2 className="underline3">
              <Link to="/seattle" className="city">
              Seattle, WA
              </Link>
            </h2>
            <h2 className="underline4">
              <Link to="/denver" className="city">
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
              <Link to="/newyork" className="city">
              New York City, NY
              </Link>
            </h2>
            <h2 className="underline1">
              <Link to="/charlotte" className="city">
              Charlotte, NC
              </Link>
            </h2>
            <h2 className="underline2">
              <Link to="/atlanta" className="city">
              Atlanta, GA
              </Link>
            </h2>
            <h2 className="underline3">
              <Link to="/miami" className="city">
              Miami, FL
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
