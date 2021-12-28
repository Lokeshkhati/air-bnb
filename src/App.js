import React from "react";
// import Navbar from "./components/Navbar"
// import Hero from "./components/Hero";
// import Card from "./components/Card";
// import card from "./images/card-image.png";
import Jokes from "./components/Jokes";
import JokesData from "./components/JokesData";
import "./index.css";

function App() {

  const jokeElement = JokesData.map(joke=>{
    return <Jokes
    setup = {joke.setup}
    punchline={joke.punchline}
    />
  })
  return (
    <div className="container">
      
  
        {/* <Navbar/>
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
     </div> */}
     {jokeElement}
    </div>
  );
}

export default App;
