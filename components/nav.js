import React from "react";
import Link from "next/link";

const Nav = props => (
  <div className={props.cName}>
    <nav>
      <ul className="menu">
        <li className="menu-item">
          <Link href="/home">
            <a>
              {/* <img
                src="./../static/icons/home.png"
                className="nav-icon"
                width="60"
                height="60"
              /> */}
              Home 🏠{" "}
            </a>
          </Link>
        </li>
        <li className="menu-item">
          {" "}
          <Link href="/blog">
            <a>MyArticles 📘</a>
          </Link>
        </li>
        <li className="menu-item">
          {" "}
          <Link href="/stories">
            <a>
              Stories 🎥{" "}
              {/* <img
                src="./../static/images/me.jpeg"
                className="nav-icon"
                width="60"
                height="60"
              /> */}
            </a>
          </Link>
        </li>
        <li className="menu-item">
          {" "}
          <Link href="/contact">
            <a>
              Contact 🙍{" "}
              {/* <img
                src="./../static/icons/person.png"
                className="nav-icon"
                width="60"
                height="60"
              /> */}
            </a>
          </Link>
        </li>
        <li className="menu-item">
          <label className="form-switch">
            <input type="checkbox" />
            <i />
            Night Mode
          </label>
        </li>
      </ul>
    </nav>
  </div>
);

export default Nav;
