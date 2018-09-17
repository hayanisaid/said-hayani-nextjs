import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Page from "../components/page";
//const imgProfile = require("./../static/said.png");
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: ""
    };
  }

  componentDidMount() {
    console.log("window height");
    console.log(window.innerHeight);
    const margin = 16; // In my case was marginTop: 8px and marginBottom: 8px
    const height = document.body.scrollHeight - margin;
    // let height = window.innerHeight;
    this.setState({ height: height });
  }

  render() {
    return (
      <div>
        <Page>
          <Head title="Home" style={{ height: this.state.height }} />
          <div className="wrapper home">
            <div className="desciption">
              <h1>Hi, This is Said Hayani</h1>
              <h3>Full Stack Developer, JavaScript enthensiast </h3>
              <p>I try to do some magic with JavaScript</p>
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
              <div className="circle" />
              <img src="./../static/images/profile.png" width="200px" />
            </div>
          </div>
          {/* splitter */}
          <div className="spliter">
            <div className="spliter-wrapper">
              <div className="description">
                <h1> Technical writer I try to make somtinh </h1>
              </div>
              <div className="img">
                <img src="./../static/images/said.jpg" />
              </div>
            </div>
          </div>
        </Page>
      </div>
    );
  }
}

export default Home;
