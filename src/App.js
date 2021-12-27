import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Card from "./components/Card";
import "./index.css"

function App() {
  return (
    <div className="conataianer">
     <Navbar/>
     <Hero/>
     <Card/>
    
    </div>
  );
}

export default App;
