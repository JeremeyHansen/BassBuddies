import { useState, useEffect } from 'react'
import ConcertCard from './ConcertCard.js'

export default function City({city}){

    const [concerts, setConcerts ] = useState([])

    useEffect(() => {
        fetch("/concerts")
          .then((res) => res.json())
          .then((data) => setConcerts(data));
      }, []);

    return (
        <div>
            <h1 className="title">Hi, {city}</h1>
            <h1 className="title2">UpComing Shows</h1>
            <div className="card-container">
            {concerts.map((concert => {
                return  <ConcertCard key={concert.id} concert={concert} />
            }))}
            </div>
        </div>
    )
}