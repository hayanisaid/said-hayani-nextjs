import React from "react";
import { connect } from "react-redux";
import Head from "./../components/head";
import Wrapper from "./../components/Wrapper";

import Page from "./../components/Page";

class Contact extends React.Component {
  render() {
    return (
      <Page>
        <div
          className={`blog me ${
            this.props.NightMode !== undefined
              ? this.props.nightBackground
              : null
          }`}
        >
          <Head title="Contact" />
          <div
            className={`contact-container ${
              this.props.NightMode !== undefined
                ? this.props.nightBackground
                : null
            }`}
          >
            <h1> Hi there 🙋‍♂</h1>
            <div className="contact-list">
              <ul className="list-unstyled">
                <li
                  className={
                    this.props.NightMode !== undefined
                      ? this.props.nightText
                      : null
                  }
                >
                  {" "}
                  🔴 Would you like to work with me? you can send me email 📫
                  Via <a href="#">info.said.dev@gmail.com</a>
                </li>
                <li
                  className={
                    this.props.NightMode !== undefined
                      ? this.props.nightText
                      : null
                  }
                >
                  {" "}
                  🔴 You need consultation or you have question for me? you can
                  send me email 📫 via <a href="#">
                    info.said.dev@gmail.com
                  </a>{" "}
                </li>
                <li
                  className={
                    this.props.NightMode !== undefined
                      ? this.props.nightText
                      : null
                  }
                >
                  {" "}
                  🔴 You can always find me on Twitter🐦{" "}
                  <a href="https://twitter.com/SaidHYN">@saidHYN</a>{" "}
                </li>
                <li
                  className={
                    this.props.NightMode !== undefined
                      ? this.props.nightText
                      : null
                  }
                >
                  {" "}
                  🔴 You can find all my articles on{" "}
                  <a href="https://medium.com/@saidhayani">Medium 📖</a>{" "}
                </li>
                <li
                  className={
                    this.props.NightMode !== undefined
                      ? this.props.nightText
                      : null
                  }
                >
                  {" "}
                  🔴 You can get free consultation related to the FrontEnd
                  Development when you subscribe to my weekly web News-letter 📬{" "}
                  <a href="http://eepurl.com/dk9OJL"> Subscribe</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

//export default Contact;
const mapStateToProps = state => {
  return {
    NightMode: state.NightMode,
    nightBackground: state.NightMode.nightBackground,
    nightText: state.NightMode.nightText,
    nightCard: state.NightMode.night_card
  };
};

export default Wrapper(connect(mapStateToProps)(Contact));
