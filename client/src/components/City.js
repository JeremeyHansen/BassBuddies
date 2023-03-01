import { useState, useEffect } from "react";
import ConcertCard from "./ConcertCard.js";
import { useLocation } from 'react-router-dom'


export default function City() {
  const [ concerts, setConcerts ] = useState([])
  const { state } = useLocation()

  useEffect(() => {
    fetch(`https://edmtrain.com/api/events?locationIds=${state.city.cityId}&client=774e665d-5a08-4e18-926e-4896e04e1378`)
    .then(res => res.json())
    .then(data => setConcerts(data.data))
    // .then(console.log(concerts))
  }, [state])


  return (
    <div>
      <h1 className="title">Hi, {state.city.city}!</h1>
      <h1 className="title2">UpComing Shows</h1>
      <div className="card-container">
        {concerts?.map((concert) => {
          return <ConcertCard key={concert.id} concert={concert} />;
        })}
      </div>
    </div>
  );
}
