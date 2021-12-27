import React from "react";
import card from "../images/card-image.png";
import star from "../images/star.png";

export default function Card() {
  return (
    <section className="card">
      <img src={card} />
      <div className="card-stats">
        <img src={star} className="card-star" />
        <span>5.0</span>
        <span className="gray" >(6) .</span>
        <span  className="gray">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p> <strong>From $136</strong> / person</p> 
    </section>
  );
}
