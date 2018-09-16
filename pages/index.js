import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Page from "../components/page";
//const imgProfile = require("./../static/said.png");

const Home = () => (
  <div>
    <Page>
      <Head title="Home" />
      <div className="wrapper home">
        <div className="desciption">
          <h1>Hi, This is Said Hayani</h1>
          <h3>Full Stack Developer, JavaScript enthensiast </h3>
          <p>I try to do some magic with JavaScript</p>
        </div>
        <div className="picture" />
      </div>
    </Page>
  </div>
);

export default Home;
