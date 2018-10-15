import React from "react";
import { connect } from "react-redux";
import Nav from "./../components/nav";
import Head from "./../components/head";
import Wrapper from "./../components/wrapper";
import Page from "./../components/page";
import Placeholder from "./../components/placeholder";

class Stories extends React.Component {
  render() {
    return (
      <div className="blog me">
        <Page>
          <Head title="Contact" />
          <Placeholder name="Stories" />
        </Page>
      </div>
    );
  }
}

//export default Stories;
export default Wrapper(connect(state => state)(Stories));
