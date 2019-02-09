import React from "react";

const SoMedias = () => (
  <div className="socail-media-links">
    <ul className="unstyled-list">
      <li>
        <a href="https://twitter.com/@saidHYN">
          <img
            src="./../static/icons/twitter.png"
            height="100"
            width="100"
            className="icon"
            alt="Said Hayani Twitter official page"
          />
        </a>
      </li>
      <li>
        <a href="https://medium.com/@saidhayani">
          <img
            src="./../static/icons/medium.png"
            height="100"
            width="100"
            className="icon"
            alt="Said Hayani Twitter medium page"
          />
        </a>
      </li>
      {/* <li>
        <a href="#">
          <img
            src="./../static/icons/instagram.png"
            height="100"
            width="100"
            alt="Said Hayani instagram official page"
            className="icon"
          />
        </a>
      </li> */}
    </ul>
  </div>
);

export default SoMedias;
