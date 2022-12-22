import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import StarterPage from "./components/StarterPage";

function App() {
  const [className, setClassName] = useState("startscreen");

  useEffect(() => {
    const timer = setTimeout(() => {
      setClassName("invisible");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <StarterPage className={className} />
      <Navbar />
    </>
  );
}

export default App;
