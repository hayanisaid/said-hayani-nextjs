import React from "react";
import Link from "next/link";

const links = [
  { href: "https://github.com/segmentio/create-next-app", label: "Github" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = props => (
  <div className={props.cName}>
    <nav>
      <ul className="menu">
        <li className="menu-item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-item">About</li>
        <li className="menu-item">Blog</li>
        <li className="menu-item">Contact</li>
      </ul>
    </nav>
  </div>
);

export default Nav;
