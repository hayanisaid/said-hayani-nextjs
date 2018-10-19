import React from "react";
import { connect } from "react-redux";
import Nav from "./../components/nav";
import Head from "./../components/head";
import Wrapper from "./../components/wrapper";

import Page from "./../components/page";

class Contact extends React.Component {
  render() {
    return (
      <div className="blog me">
        <Page>
          <Head title="Contact" />
          <div className="contact-container">
            <h1>Just Say a little Hi 🙋‍♂</h1>
            <div className="contact-list">
              <ul className="list-unstyled">
                <li>
                  {" "}
                  🔴 You would like to work with me send me email 📫 Via{" "}
                  <a href="#">info.said.dev@gmail.com</a>
                </li>
                <li>
                  {" "}
                  🔴 You need consultation or you have quetion for me send me
                  email 📫 via <a href="#">info.said.dev@gmail.com</a>{" "}
                </li>
                <li>
                  {" "}
                  🔴 I got <a href="#"> Twitter🐦</a> you can find me there{" "}
                  <a href="#">@saidHYN</a>{" "}
                </li>
                <li>
                  {" "}
                  🔴 And don't foget to check my profile on{" "}
                  <a href="#">Medium 📖</a>{" "}
                </li>
                <li>
                  {" "}
                  🔴 You can get free consultation when you subscribe to weekly
                  web news letter 📬 <a href="#"> Subscribe</a>
                </li>
              </ul>
            </div>
          </div>
        </Page>
      </div>
    );
  }
}

//export default Contact;

export default Wrapper(connect(state => state)(Contact));
