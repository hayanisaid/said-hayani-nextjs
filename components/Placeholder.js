import React from "react";

const Placeholder = props => {
  let { anyClass } = props;
  if (!anyClass) {
    anyClass = null;
  }
  return (
    <div className={`placeholder-container ${props.anyClass}`}>
      <img
        src="./../static/images/placeholder.svg"
        className="placeholder_img"
      />
      <h4>{props.name} Not Available yet 👐</h4>
    </div>
  );
};

export default Placeholder;

const typing = string => {
  let str = string;
};
