import React from "react";
import Contact from "./components/Contact";
import img from "./images/card-image.png";
// import Navbar from "./components/Navbar"
// import Hero from "./components/Hero";
// import Card from "./components/Card";
import "./index.css";

function App() {
  return (
    <div className="contacts">
      {/* <Navbar/>
     <Hero/>
     <Card/>  */}
      <div className="contacts">
        <Contact
          img={img}
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <Contact
          img={img}
          name="Fluffykins"
          phone="(212) 555-2345"
          email="fluff@me.com"
        />
        <Contact
          img={img}
          name="Felix"
          phone="(212) 555-4567"
          email="thecat@hotmail.com"
        />
        <Contact
          img={img}
          name="Pumpkin"
          phone="(0800) CAT KING"
          email="pumpkin@scrimba.com"
        />
      </div>
    </div>
  );
}

export default App;
