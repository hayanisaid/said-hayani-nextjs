import React from "react";
import SoMedia from "./Social_media";
import { connect } from "react-redux";
const Description = ({ NightMode }) => (
  <div className="desciption_wrapper">
    <h1 className={NightMode.titleclass}>Hi, This is Said Hayani</h1>
    <h3 className={NightMode.titleclass}>
      FrontEnd Software Developer| technical Writer | instructor{" "}
    </h3>
    <p className={NightMode.titleclass}>
      I dedicate my time to teach JavaScript for beginners
    </p>
    <SoMedia />
  </div>
);
const mapStateToProps = state => {
  return {
    NightMode: state.NightMode
  };
};

export default Description;
//export default conntect(mapStateToProps)(Description);
