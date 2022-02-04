import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="title">{props.card.title}</div>
      <div>
        <img src={props.card.image} alt={props.card.description} />
      </div>
      <div className="description">{props.card.description}</div>
    </div>
  );
};

export default Card;
