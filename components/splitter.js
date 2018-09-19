import React from "react";
const vm = this;
let width = 0;
let height = 0;
const Splitter = props => (
  <div
    style={{ width: `${props.width}px` }}
    className="spliter"
    // onMouseMove={vm => {
    //   HandelSplitterWidth(vm);
    // }}
  >
    <div className="spliter-wrapper">
      <div className="description">
        <h1> Technical writer I try to make somtinh </h1>
      </div>
      <div className="img">
        <img src="./../static/images/said.jpg" />
      </div>
    </div>
  </div>
);

const HandelSplitterWidth = e => {
  console.log(e.clientX);
  console.log(window.innerWidth);
  width = e.clientX / window.innerWidth;
};

export default Splitter;
