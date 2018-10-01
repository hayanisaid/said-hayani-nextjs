import React, { Component } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import Wrapper from "./wrapper";
import { bindActionCreators } from "redux";
import { ActionInvorkers } from "./actions/nav.actions";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: false
    };
  }

  toggleChecker() {
    // this.setState(({ mode }) => ({ mode: !mode }));
    // setTimeout(() => {
    //   console.log("sss");
    //   console.log(this.state.mode);
    // }, 2000);

    this.setState({ mode: !this.state.mode }, () => {
      if (this.state.mode === true) {
        console.log(this.state.mode);
        this.props.setNightMode("navnightmode");
      } else if (this.state.mode === false) {
        this.props.setNightMode("navdaymode");
      }
    });
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
    console.log("rendered");
    console.log(this.state.mode);
    return (
      <div className={`navigator  ${this.props.NighMode.navClass}`}>
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
                <span>{this.props.NighMode.isNighMode ? "🌙" : "🌞"}</span>
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
    NighMode: state.NightMode
  };
};

export default Wrapper(
  connect(
    mapStateToProps,
    mapDispatchersToProps
  )(Nav)
);
