import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import Page from "../components/page";

const Home = () => (
  <div>
    <Page>
      <Head title="Home" />
      <div className="wrapper home" />
    </Page>
  </div>
);

export default Home;
