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
      <div className="img">
        <img src="./../static/images/said.jpg" />
      </div>
      <div className="description">
        <ul className="list">
          <li>
            {" "}
            <span className="first">📝</span> Technichal Writer , Check out my
            alll Articles all Medium
            <span>
              <a href="#">➡️</a>
            </span>{" "}
          </li>
          <li>
            <span className="first"> 👨‍🏫</span> Instructor ,Check my Courses on
            Skillshare
            <span>
              <a href="#">➡️</a>{" "}
            </span>
          </li>

          <li>
            <span className="first">🔈</span> I'm Speaking in the upcoming
            <a href=" DevoxxMa" /> this year check the list of speakers
            <span>👌</span>
          </li>
          <li>
            And one last thing , I do <span>❤️ </span>
            JavaScript
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const HandelSplitterWidth = e => {
  //console.log(e.clientX);
  // console.log(window.innerWidth);
  width = e.clientX / window.innerWidth;
};

export default Splitter;
