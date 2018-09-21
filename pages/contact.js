import React from "react";
import Nav from "./../components/nav";
import Head from "./../components/head";
import Page from "./../components/page";

class Contact extends React.Component {
  render() {
    return (
      <div className="blog me">
        <Page>
          <Head title="Contact" />
          <div>Hello world from Contact</div>
        </Page>
      </div>
    );
  }
}

export default Contact;
