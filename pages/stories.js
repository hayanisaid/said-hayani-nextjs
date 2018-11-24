import React from "react";
import { connect } from "react-redux";
import Head from "./../components/Head";
import Wrapper from "./../components/Wrapper";
import Page from "./../components/Page";
import Placeholder from "./../components/Placeholder";

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
