import React from "react";

const Card = props => (
  <div className="card">
    <div className="card-body">
      <div className="card-img">
        <img src={props.image} />
      </div>
      <div className="card-text">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className="card-footer">
        <a href="#">Read n Medium</a>
      </div>
    </div>
  </div>
);

export default Card;
