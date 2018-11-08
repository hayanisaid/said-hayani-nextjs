import React from "react";

const Card = props => {
  let { night_card, nightText } = props.nightMode;
  return (
    <div className={`card ${night_card}`}>
      <div className="card-body">
        <div className="card-img">
          <img src={props.image} />
        </div>
        <div className="card-text">
          <h3 className={` ${props.nightMode ? nightText : ""}`}>
            {props.title}
          </h3>
          <p className={` ${props.nightMode ? nightText : ""}`}>
            {props.description}
          </p>
          <div className="card-footer">
            <a href="#">Read n Medium</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
