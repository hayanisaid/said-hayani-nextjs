import React from "react";
import Placeholder from "./placeholder";

const Iphone = () => (
  <div className="iphone_wrapper">
    {/* <img
      src="./../static/images/iphone.jpg"
      alt="iphone wrapper"
      className="iphone"
    /> */}
    <div className="preview">
      {/* <img
        src="./../static/images/preview.png"
        className="img_preview"
        alt="preview"
      /> */}
      <object
        className="img_preview"
        type="text/html"
        data="https://medium.com/@saidhayani"
        style={{ width: "100%", height: "100%" }}
      >
        <div>loading ....</div>
      </object>
    </div>
  </div>
);

export default Iphone;
