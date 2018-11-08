import React, { Component } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import Wrapper from "./wrapper";
import { bindActionCreators } from "redux";
import { ActionInvorkers } from "./actions/nav.actions";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: false
    };
    console.log(this.props);
  }

  toggleChecker(e) {
    // this.setState(({ mode }) => ({ mode: !mode }));
    // setTimeout(() => {
    //   console.log("sss");
    //   console.log(this.state.mode);
    // }, 2000);

    e.stopPropagation();

    this.setState({ mode: !this.state.mode }, () => {
      if (this.state.mode === true) {
        const data = {
          isNightMode: true,
          navClass: "navnightmode",
          circlemodeclass: "circleNight",
          homeClass: "homeNight",
          titleclass: "titleNight",
          nightBackground: "nighbackground",
          nightText: "night-text",
          night_card: "night_card",
          whiteBackground: "whiteBackground"
        };
        this.props.setNightMode(data);
      } else if (this.state.mode === false) {
        const data = {
          isNightMode: false,
          navClass: "navdaymode",
          circlemodeclass: "cirlceDay",
          homeClass: "homeDay",
          titleclass: "titleDay",
          nightBackground: "",
          nightText: ""
        };
        this.props.setNightMode(data);
      }
    });
  }

  componentDidMount() {}
  closeNav() {
    let nav = document.querySelector(".navigator");
    nav.classList.remove("toggle");
  }
  // toggleChecker(event) {toggleChecker
  //   const target = event.target;
  //   const value = target.type === "checkbox" ? target.checked : target.value;
  //   const name = target.name;
  //   console.log("clicked!!");
  //   console.log(name);
  //   this.setState({
  //     [name]: value
  //   });
  //   console.log(this.state.mode);
  //   // this.props.setNightMode();
  // }
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={700}
        className={`navigator  ${this.props.NightMode.navClass}`}
      >
        <span
          className={`close-icon ${
            this.props.NightMode ? this.props.NightMode.whiteBackground : null
          }`}
          onClick={this.closeNav.bind(this)}
        >
          x
        </span>
        <nav>
          <ul className="menu">
            <li className="menu-item">
              <Link href="/home">
                <a>Home 🏠 </a>
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
                <a>Stories 🎥 </a>
              </Link>
            </li>
            <li className="menu-item">
              {" "}
              <Link href="/contact">
                <a>Contact 🙍 </a>
              </Link>
            </li>
            <li className="menu-item">
              <label className="form-switch">
                <input
                  type="checkbox"
                  ref="switch"
                  checked={this.state.mode}
                  onChange={this.toggleChecker.bind(this)}
                />
                <i />
                <span>{this.props.NightMode.isNightMode ? "🌙" : "🌞"}</span>
              </label>
            </li>
          </ul>
        </nav>
      </ReactCSSTransitionGroup>
    );
  }
}

//export default Nav;

const mapDispatchersToProps = dispatcher => {
  return bindActionCreators(ActionInvorkers, dispatcher);
};
const mapStateToProps = state => {
  return {
    NightMode: state.NightMode,
    nightBackground: state.NightMode.nightBackground,
    nightText: state.NightMode.nightText
  };
};

export default Wrapper(
  connect(
    mapStateToProps,
    mapDispatchersToProps
  )(Nav)
);
