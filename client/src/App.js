import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import StarterPage from './components/StarterPage'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home.js'
import Cities from './components/Cities.js'
import Contact from './components/Contact.js'
import SanDiego from './components/allcities/SanDiego.js'
import NewYork from './components/allcities/NewYork.js'
import Charlotte from './components/allcities/Charlotte.js'
import Miami from './components/allcities/Miami.js'
import Atlanta from './components/allcities/Atlanta.js'
import Seattle from './components/allcities/Seattle.js'
import LA from './components/allcities/LA.js'
import SF from './components/allcities/SF.js'
import Denver from './components/allcities/Denver.js'


function App() {
  const [className, setClassName] = useState('startscreen')

  useEffect(() => {
    const timer = setTimeout(() => {
      setClassName('invisible')
    }, 2900)
    return () => clearTimeout(timer)
  }, [])

  const [concerts, setConcerts ] = useState([])

  useEffect(() => {
      fetch("/concerts")
        .then((res) => res.json())
        .then((data) => setConcerts(data));
    }, []);

  return (
    <>
      <StarterPage className={className} />
      <Navbar />
      <div className="com-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<Cities />} concerts={concerts}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/sandiego" element={<SanDiego />} />
          <Route path="/atlanta" element={<Atlanta />} />
          <Route path="/newyork" element={<NewYork />} />
          <Route path="/charlotte" element={<Charlotte />} />
          <Route path="/miami" element={<Miami />} />
          <Route path="/seattle" element={<Seattle />} />
          <Route path="/la" element={<LA />} />
          <Route path="/sf" element={<SF />} />
          <Route path="/denver" element={<Denver />} />
        </Routes>
      </div>
    </>
  )
}

export default App
