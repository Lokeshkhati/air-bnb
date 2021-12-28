import React from "react";

export default function Jokes(props) {
  return (
    <div className="joke-container">
      <h2>Setup : {props.setup} </h2>
      <h3>Punchline : {props.punchline} </h3>
    </div>
  )
}
