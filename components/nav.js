import React, { Component } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import Wrapper from "./wrapper";
import { bindActionCreators } from "redux";
import { ActionInvorkers } from "./actions/nav.actions";

class Nav extends Component {
  constructor(props) {
    super(props);
  }
  setNightMode() {
    this.props.setNightMode();
    console.log(this.props.isNighMode);
    // document.body.style.backgroundColor = this.props.isNighMode.backgroundColor;
  }
  render() {
    return (
      <div className={this.props.cName}>
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
                <input type="checkbox" onClick={this.setNightMode.bind(this)} />
                <i />
                <span>🌙</span>
              </label>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

//export default Nav;

const mapDispatchersToProps = dispatcher => {
  return bindActionCreators(ActionInvorkers, dispatcher);
};
const mapStateToProps = state => {
  return {
    isNighMode: state.NightMode
  };
};

export default Wrapper(
  connect(
    mapStateToProps,
    mapDispatchersToProps
  )(Nav)
);
