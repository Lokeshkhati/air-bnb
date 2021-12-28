import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Card from "./components/Card";
import card from "./images/card-image.png";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Navbar/>
     <Hero/>
     <div className="cards">
     <Card
     img={card}
     rating ="5.0"
     reviewCount = {6}
     country = "USA"
     title =" Life lessons with Katie Zaferes"
     price = {136}

     /> 
     <Card
     img={card}
     /> 
     <Card
     img={card}
     /> 
     <Card
     img={card}
     /> 
     </div>
  
        
    </div>
  );
}

export default App;
