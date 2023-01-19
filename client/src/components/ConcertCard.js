import '../css/concertcard.css'

export default function ConcertCard({ concert }) {
  return (
    <div className="concert-card">
        <div className="card-venue">
      <h4 as="h5">{concert.venue}</h4>
        </div>
      <div className="card-contents">
      <div className="card-text">
        <h2>{concert.artist}</h2>
        <p><span>Address: </span>{concert.address}</p>
        <p><span>Date: </span>{concert.date}</p>
        <button variant="primary">
          {" "}
          <a className="link" href={concert.link}>Tickets</a>
        </button>
      </div>
      <div className="img-container">
        <img src={concert.img} className="concert-img"></img>
      </div>
      </div>
    </div>
  );
}
