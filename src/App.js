import React from "react";
import Jokes from "./components/Jokes";
// import Navbar from "./components/Navbar"
// import Hero from "./components/Hero";
// import Card from "./components/Card";
import "./index.css";

function App() {
  return (
    <div className="container">
      {/* <Navbar/>
     <Hero/>
     <Card/>  */}
      <Jokes 
    //  setup= "I got my daughter a fridge for her birthday."
     punchline= "I can't wait to see her face light up when she opens it."
     />
     <Jokes 
     setup="How did the hacker escape the police?"
     punchline="He just ransomware!
"     />
     <Jokes 
     setup= "Why don't pirates travel on mountain roads?"
     punchline= "Scurvy."
     />
     <Jokes 
     setup= " What's the best thing about Switzerland?"
     punchline= "I don't know, but the flag is a big plus!"
     />
        
    </div>
  );
}

export default App;
