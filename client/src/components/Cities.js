import "../css/city.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsMusicNote, BsMusicNoteBeamed } from "react-icons/bs";
import "animate.css";
import { Bars } from "react-loader-spinner";

export default function Cities() {
  //data for the different cities we want in the site
  const westCities = [
    {
      city: "Denver",
      state: "CO",
      cityId: 76,
    },
    {
      city: "Los Angeles",
      state: "CA",
      cityId: 73,
    },
    {
      city: "San Diego",
      state: "CA",
      cityId: 81,
    },
    {
      city: "San Francisco",
      state: "CA",
      cityId: 72,
    },
    {
      city: "Seattle",
      state: "WA",
      cityId: 77,
    },
  ];
  const eastCities = [
    {
      city: "Atlanta",
      state: "GA",
      cityId: 84,
    },
    {
      city: "Charlotte",
      state: "NC",
      cityId: 101,
    },
    {
      city: "Chicago",
      state: "IL",
      cityId: 70,
    },
    {
      city: "Miami",
      state: "FL",
      cityId: 87,
    },
    {
      city: "New York City",
      state: "NY",
      cityId: 70,
    },
  ];

  //setting button text and classes for mobile dropdown
  const [buttonClassEast, setButtonClassEast] = useState("city-button");
  const [buttonClassWest, setButtonClassWest] = useState("city-button");
  const [buttonTextEast, setButtonTextEast] = useState("East Coast");
  const [buttonTextWest, setButtonTextWest] = useState("West Coast");
  const [buttonContainer, setButtonContainer] = useState("button-container1");

  const [citiesToDisplay, setCitiesToDisplay] = useState([]);

  //function to change button text and display cities
  function handleEast() {
    setButtonClassEast("active-city");
    setCitiesToDisplay(eastCities);
    setButtonClassWest("city-button-gone");
    setButtonTextWest("Check Out The West");
    setButtonTextEast("East Cities");
    setButtonContainer("button-container");
  }

  function handleWest() {
    setButtonClassWest("active-city");
    setCitiesToDisplay(westCities);
    setButtonClassEast("city-button-gone");
    setButtonTextEast("Check Out The East");
    setButtonTextWest("West Cities");
    setButtonContainer("button-container");
  }

  //animation setting
  // const { scrollYProgress } = useScroll();

  return (
    <div>
      <div className="cities-container">
        <div className="west-cities">
          <div className="city-title">
            <h1>West Coast</h1>
          </div>
          <div className="city-desktop-container">
            <motion.div layout>
              <AnimatePresence>
                {westCities.map((city) => {
                  return (
                    <h2 className={city.state} key={city.id}>
                      <Link to="/city" className="city" state={{ city }}>
                        {city.city}, {city.state}
                      </Link>
                    </h2>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
        <div className="east-cities">
          <div className="city-title">
            <h1>East Coast</h1>
          </div>
          <div className="city-desktop-container">
            <motion.div layout>
              <AnimatePresence>
                {eastCities.map((city) => {
                  return (
                    <h2 className={city.state} key={city.id}>
                      <Link to="/city" className="city" state={{ city }}>
                        {city.city}, {city.state}
                      </Link>
                    </h2>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="cities-mobile-container">
        <div className={buttonContainer}>
          <button className={buttonClassEast} onClick={handleEast}>
          {/* <Bars
              height="30"
              width="30"
              color="#5cdb95"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            /> */}
            <span className="button-text-yes">{buttonTextEast} </span>
            {/* <Bars
              height="30"
              width="30"
              color="#5cdb95"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            /> */}
          </button>
          <button className={buttonClassWest} onClick={handleWest}>
          {/* <Bars
              height="30"
              width="30"
              color="#5cdb95"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            /> */}
            <span className="button-text-yes">{buttonTextWest} </span>
            {/* <Bars
              height="30"
              width="30"
              color="#5cdb95"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            /> */}
          </button>
        </div>
        <div className="mobile-city-container">
          <motion.div layout>
            <AnimatePresence>
              {citiesToDisplay.map((city) => {
                return (
                  <h2 className="mobile-city" key={city.id}>
                    <Link to="/city" className="city" state={{ city }}>
                      {city.city}, {city.state}
                    </Link>
                  </h2>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      <div className="city-music-container">
        <BsMusicNote className="note-5" />
        <BsMusicNote className="note-6" />
        <BsMusicNote className="note-7" />
        <BsMusicNote className="note-8" />
        <BsMusicNote className="note-9" />
        <BsMusicNote className="note-10" />
        <BsMusicNoteBeamed className="note2-5" />
        <BsMusicNoteBeamed className="note2-6" />
        <BsMusicNoteBeamed className="note2-7" />
        <BsMusicNoteBeamed className="note2-8" />
        <BsMusicNoteBeamed className="note2-9" />
        <BsMusicNoteBeamed className="note2-10" />
      </div>
    </div>
  );
}
