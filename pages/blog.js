import React from "react";
import { connect } from "react-redux";
import Nav from "./../components/nav";
import Head from "./../components/head";
import Page from "./../components/page";
import Wrapper from "./../components/wrapper";
import Card from "./../components/card";
import Placeholder from "./../components/placeholder";
//import sketch from "./../static/images/me.jpeg";
//const imag = require("./../static/images/said-sketch-v3.jpg");
const url = "https://medium.com/@saidhayani";

import { getPosts } from "./../services/http";
import axios from "axios";

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ready: false
    };
  }

  getMediumPost() {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    };
    axios({
      method: "get",
      url: url,
      responseType: "json"
    })
      .then(data => {
        console.log("data pub");
        console.log(data);
      })
      .catch(err => {
        console.log("err==", err);
      });
  }
  componentDidMount() {
    //   this.getMediumPost();
  }
  render() {
    const content = !this.state.ready ? (
      <Placeholder name="Blog" anyClass={this.props.nightBackground} />
    ) : (
      <div>
        <Head title="blog" />
        <div
          className={`blog-wrapper ${
            this.props.NightMode ? this.props.nightBackground : null
          }`}
        >
          <div className="header">
            <div className="header_description">
              <h1
                className={`${
                  this.props.NightMode ? this.props.nightText : null
                }`}
              >
                Blog
              </h1>
              <p
                className={`description_paragraph ${
                  this.props.NightMode ? this.props.nightText : null
                }`}
              >
                Writting Articles About allows me to explore the hype of
                technology
              </p>
            </div>
            <div className="header_media">
              <img
                src="./../static/images/said-sketch-v3.png"
                className="header_image"
                alt="Said Hayani sketch image"
              />
            </div>
          </div>
          <div className="cards">
            <React.Fragment>
              <Card
                title="JavaScript write less do more"
                image="./../static/images/me.jpeg"
                nightMode={this.props.NightMode ? this.props.NightMode : null}
                description="this is the description of my Articles"
              />
              <Card
                title="JavaScript write less do more"
                image="./../static/images/me.jpeg"
                nightMode={this.props.NightMode ? this.props.NightMode : null}
                description="this is the description of my Articles"
              />
              <Card
                title="JavaScript write less do more"
                image="./../static/images/me.jpeg"
                nightMode={this.props.NightMode ? this.props.NightMode : null}
                description="this is the description of my Articles"
              />
              <Card
                title="JavaScript write less do more"
                nightMode={this.props.NightMode ? this.props.NightMode : null}
                image="./../static/images/me.jpeg"
                description="this is the description of my Articles"
              />
              <Card
                title="JavaScript write less do more"
                image="./../static/images/me.jpeg"
                nightMode={this.props.NightMode ? this.props.NightMode : null}
                description="this is the description of my Articles"
              />
              <Card
                title="JavaScript write less do more"
                nightMode={this.props.NightMode ? this.props.NightMode : null}
                image="./../static/images/me.jpeg"
                description="this is the description of my Articles"
              />
            </React.Fragment>
          </div>
        </div>
        <div />
      </div>
    );

    return (
      <div className="blog ">
        <Page>{content}</Page>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    NightMode: state.NightMode,
    nightBackground: state.NightMode.nightBackground,
    nightText: state.NightMode.nightText,
    nightCard: state.NightMode.night_card
  };
};

export default Wrapper(connect(mapStateToProps)(Blog));
