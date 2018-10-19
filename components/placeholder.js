import React from "react";

const Placeholder = props => {
 let {anyClass}=props
  if(!anyClass){
    anyClass=""
  }
  return (
    <div className={`placeholder-container ${props.anyClass}`}>
      <h1>{props.name} Not Available yet 👐</h1>
    </div>
  );
};

export default Placeholder;

const typing = string => {
  let str = string;
};
