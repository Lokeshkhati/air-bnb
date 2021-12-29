import React from "react";

export default function Card(props) {
  let badgeText;
  if(props.openSpots===0){
    badgeText = "SOLD OUT"
  }
  else if(props.location ==="Online"){
    badgeText = "ONLINE"
  }
  return (
    <section className="card">
      {badgeText  && <div className="card-badge ">{badgeText}</div>}
      <img src={`../images/${props.item.coverImg}`} className="card-image" />
      <div className="card-stats">
        <img src="../images/star.png" className="card-star" />
        <span>{props.item.rating} </span>
        <span className="gray" >{props.item.reviewCount} .</span>
        <span  className="gray">{props.item.location} </span>
      </div>
      <p>{props.item.title}</p>
      <p> <strong>From ${props.item.price} </strong> / person</p> 
    </section>
  );
}
