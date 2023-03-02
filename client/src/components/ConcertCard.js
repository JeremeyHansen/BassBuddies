import "../css/concertcard.css";
import { BsMusicNote } from "react-icons/bs";


export default function ConcertCard({ concert }) {

  return (
    <div className="concert-card">
      <div className="card-venue">
        <h4 as="h5">{concert.venue.name}</h4>
      </div>
      <div className="card-contents">
        <div className="card-text">
          <div className="artist-container">
          <h2 className="artist-title">{concert.artistList.length > 1 ? "Artists: " : "Artist: "}</h2>
          {concert.artistList.map((art) => {
            return <h2 key={art.id} className="artist-list">&nbsp;{art.name} <BsMusicNote className="artist-music-note"/></h2>
          })}
          </div>
          <p>
            <span>Address: </span>
            {concert.venue.address}
          </p>
          <p className="mobile-date">
            <span className="date">Date: </span>
            {concert.date}
          </p>
          <button variant="primary">
            {" "}
            <a className="link" href={concert.link}>
              Tickets
            </a>
          </button>
        </div>
        <div className="img-container">
          {/* <img src={concert.img} className="concert-img"></img> */}
        </div>
      </div>
    </div>
  );
}
