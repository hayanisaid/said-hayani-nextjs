import React from "react";
import Nav from "./../components/nav";
import Head from "./../components/head";
import Page from "./../components/page";
import "./../styles/_nav.styl";

class Blog extends React.Component {
  render() {
    return (
      <div className="blog me">
        <Page>
          <Head title="blog" />
          <div>Hello world from blog</div>
        </Page>
      </div>
    );
  }
}

export default Blog;
