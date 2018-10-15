import React from "react";

const Placeholder = props => {
  typing("hello world");
  return (
    <div className="placeholder-container">
      <h1>{props.name} Not Available yet 👐</h1>
    </div>
  );
};

export default Placeholder;

const typing = string => {
  let str = string;
};
