import React from "react";
import Circle from "./animated-circle";
import Iphone from "./Iphone";

const Picture = ({ NightMode }) => (
  <div className="picture">
    {/* <Circle name={NightMode.circlemodeclass} /> */}
    {/* <img src="./../static/images/profile.png" width="200px" /> */}
    <Iphone />
  </div>
);

export default Picture;
