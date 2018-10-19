import React from "react";
import { connect } from "react-redux";
import Nav from "./../components/nav";
import Head from "./../components/head";
import Wrapper from "./../components/wrapper";
import Page from "./../components/page";
import Placeholder from "./../components/placeholder";

class Stories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={`stories ${this.props.nightBackground}`}>
        <Page>
          <Head title="Said's Stories" />
          <Placeholder name="Stories" anyClass={this.props.nightBackground} />
        </Page>
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

//export default Stories;
export default Wrapper(connect(mapStateToProps)(Stories));
