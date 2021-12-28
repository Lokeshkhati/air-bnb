import React from "react";
import star from "../images/star.png";

export default function Card({img,rating,reviewCount,country,title,price}) {
  return (
    <section className="card">
      <img src={img} />
      <div className="card-stats">
        <img src={star} className="card-star" />
        <span>{rating} </span>
        <span className="gray" >{reviewCount} .</span>
        <span  className="gray">{country} </span>
      </div>
      <p>{title}</p>
      <p> <strong>From ${price} </strong> / person</p> 
    </section>
  );
}
