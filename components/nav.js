import React from "react";
import Link from "next/link";

// const links = [
//   { href: "https://github.com/segmentio/create-next-app", label: "Github" }
// ].map(link => {
//   link.key = `nav-link-${link.href}-${link.label}`;
//   return link;
// });

const Nav = props => (
  <div className={props.cName}>
    <nav>
      <ul className="menu">
        <li className="menu-item">
          <Link href="/">
            <a>
              {/* <img
                src="./../static/icons/home.png"
                className="nav-icon"
                width="60"
                height="60"
              /> */}
              Home{" "}
            </a>
          </Link>
        </li>
        <li className="menu-item">
          {" "}
          <Link href="/">
            <a>
              AboutMe{" "}
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
          <Link href="/">
            <a>Blog</a>
          </Link>
        </li>
        <li className="menu-item">
          {" "}
          <Link href="/">
            <a>
              Stories{" "}
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
          <Link href="/">
            <a>
              Contact{" "}
              <img
                src="./../static/icons/person.png"
                className="nav-icon"
                width="60"
                height="60"
              />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Nav;
