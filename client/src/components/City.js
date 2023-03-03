import { useState, useEffect } from "react";
import ConcertCard from "./ConcertCard.js";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoSearchCircle } from "react-icons/io5";

export default function City() {
  const [concerts, setConcerts] = useState([]);
  const { state } = useLocation();

  useEffect(() => {
    fetch(
      `https://edmtrain.com/api/events?locationIds=${state.city.cityId}&client=774e665d-5a08-4e18-926e-4896e04e1378`
    )
      .then((res) => res.json())
      .then((data) => setConcerts(data.data));
    // .then(console.log(concerts))
  }, [state]);

  //search function for out list
  const [searchTerm, setSearchTerm] = useState("");

  const concertsToDisplay = concerts.filter((concert) =>
    (concert.venue.name + concert.artistList.map(artist => artist.name) + concert.date)
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  //function to open search

const [searchOpen, setSearchOpen] = useState("search-closed");
const [searchIcon, setSearchIcon] = useState("search-icon");
  function handleSearchIcon(){
    setSearchOpen("search-input")
    setSearchIcon("search-icon-closed")
  }

  return (
    <div className="whole-container">
      <h1 className="title">Hi, {state.city.city}!</h1>
      <h1 className="title2">
      <IoSearchCircle className={searchIcon} onClick={handleSearchIcon}/>
        UpComing Shows
      </h1>
      <input
      className={searchOpen}
        placeholder="Artist, Venue, Date"
        value={searchTerm}
        onChange={handleChange}
      ></input>
      <div className="card-container">
        <motion.div layout>
          <AnimatePresence>
            {concertsToDisplay?.map((concert) => {
              return <ConcertCard key={concert.id} concert={concert} />;
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
