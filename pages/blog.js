import React from "react";
import { connect } from "react-redux";
import Nav from "./../components/nav";
import Head from "./../components/head";
import Page from "./../components/page";
import Wrapper from "./../components/wrapper";
import Card from "./../components/card";
import Placeholder from "./../components/placeholder";
//const imag = require("./../static/images/me.jpeg");

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ready: true
    };
  }
  componentDidMount() {
    console.log("process");
    console.log(process.env.URL);
  }
  render() {
    const content = this.state.ready ? (
      <Placeholder name="Blog" anyClass={this.props.nightBackground} />
    ) : (
      <div>
        <Head title="blog" />
        <div className="blog-wrapper">
          <div className="header">
            <div className="description">
              <h1>My Articles </h1>
              <h2>
                Writting Articles About allows me to explore the hype of
                technology {process.env.URL}
              </h2>
            </div>
          </div>
          <div className="cards">
            <React.Fragment>
              <Card
                title="JavaScript write less do more"
                image="./../static/images/me.jpeg"
                description="this is the description of my Articles"
              />
              <Card
                title="JavaScript write less do more"
                image="./../static/images/me.jpeg"
                description="this is the description of my Articles"
              />
              <Card
                title="JavaScript write less do more"
                image="./../static/images/me.jpeg"
                description="this is the description of my Articles"
              />
              <Card
                title="JavaScript write less do more"
                image="./../static/images/me.jpeg"
                description="this is the description of my Articles"
              />
              <Card
                title="JavaScript write less do more"
                image="./../static/images/me.jpeg"
                description="this is the description of my Articles"
              />
              <Card
                title="JavaScript write less do more"
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
    nightText: state.NightMode.nightText
  };
};

export default Wrapper(connect(mapStateToProps)(Blog));
