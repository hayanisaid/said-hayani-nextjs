import React from "react";

const MobileBtn = props => (
  <div className="mobile-btn-wrapper">
    <button className="mobile- btn" onClick={props.onClick}>
      {" "}
      🚀 <span>menu</span>
    </button>
  </div>
);

export default MobileBtn;
