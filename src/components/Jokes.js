import React from "react";

export default function Jokes({setup,punchline}) {
  return (
    <div className="joke-container">
    { setup && <h2>Setup : {setup} </h2>}
      <h3>Punchline : {punchline} </h3>
    </div>
  )
}
