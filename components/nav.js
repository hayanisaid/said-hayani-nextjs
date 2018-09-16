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
            <a>Home</a>
          </Link>
        </li>
        <li className="menu-item">
          {" "}
          <Link href="/">
            <a>AboutMe</a>
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
            <a>Stories</a>
          </Link>
        </li>
        <li className="menu-item">
          {" "}
          <Link href="/">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Nav;
