import React from "react";
import { connect } from "react-redux";
import Link from "next/link";
import Head from "../components/head";
import Page from "../components/page";
import Wrapper from "../components/wrapper";
import Splitter from "../components/splitter";
import Scale from "./../components/scale";
import Circle from "../components/animated-circle";

//import css from "./../styles/sass.scss";
//const imgProfile = require("./../static/said.png");
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      scale: false
    };
    //  this.HandelSplitterWidth = this.HandelSplitterWidth.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
    //console.log("window height");
    //  console.log(window.innerHeight);
    const margin = 16; // In my case was marginTop: 8px and marginBottom: 8px
    const height = document.body.scrollHeight - margin;
    // let height = window.innerHeight;
    this.setState({ height: height });
  }

  HandelSplitterWidth(e) {
    // console.log(e.clientX);
    // console.log(window.innerWidth);
    let width = (e.clientX - innerHeight / 2) * 1;
    this.setState({ width });
  }

  render() {
    return (
      <div>
        {/* <Scale /> */}
        <Page>
          <Head title="Home" style={{ height: this.state.height }} />
          <div
            className={`wrapper  ${this.props.NightMode.homeClass}`}
            onMouseMove={vm => {
              this.HandelSplitterWidth(vm);
            }}
          >
            <div className="desciption">
              <h1 className={this.props.NightMode.titleclass}>
                Hi, This is Said Hayani
              </h1>
              <h3 className={this.props.NightMode.titleclass}>
                Full Stack Developer, JavaScript enthensiast{" "}
              </h3>
              <p className={this.props.NightMode.titleclass}>
                I try to do some magic with JavaScript
              </p>
              <div className="socail-media-links">
                <ul className="unstyled-list">
                  <li>
                    <img
                      src="./../static/icons/twitter.png"
                      height="100"
                      width="100"
                      className="icon"
                    />
                  </li>
                  <li>
                    <img
                      src="./../static/icons/medium.png"
                      height="100"
                      width="100"
                      className="icon"
                    />
                  </li>
                  <li>
                    <img
                      src="./../static/icons/instagram.png"
                      height="100"
                      width="100"
                      className="icon"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="picture">
              <Circle name={this.props.NightMode.circlemodeclass} />
              <img src="./../static/images/profile.png" width="200px" />
            </div>
          </div>

          {/* <Splitter width={this.state.width} /> */}
        </Page>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    NightMode: state.NightMode
  };
};

//export default Home;
export default Wrapper(connect(mapStateToProps)(Home));
const sayHello = () => {
  return "hello";
};
