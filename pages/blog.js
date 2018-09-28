import React from "react";
import Nav from "./../components/nav";
import Head from "./../components/head";
import Page from "./../components/page";
import Card from "./../components/card";
//const imag = require("./../static/images/me.jpeg");

class Blog extends React.Component {
  componentDidMount() {
    console.log("process");
    console.log(process.env.URL);
  }
  render() {
    return (
      <div className="blog ">
        <Page>
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
            </div>
          </div>
        </Page>
      </div>
    );
  }
}

export default Blog;
