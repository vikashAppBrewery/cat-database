import React from "react";
import "./card.styles.css";

export const Card = props => (
  <div className="card-container">
    <center>
      <img
        className="image-user"
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set4`}
      />
    </center>
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);
