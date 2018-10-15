import React from "react";
import dynamic from "next/dynamic";
import { connect } from "react-redux";
//import Home from "./home";

import Wrapper from "./../components/wrapper";
const Home = dynamic(import("./home"), {
  loading: () => <div>.... loading</div>
});
class App extends React.Component {
  componentDidMount = () => {
    console.log(this.props);
  };

  render() {
    return <Home />;
  }
}

const mapStateToProps = state => {
  return {
    openMenu: state.openMenu
  };
};

export default Wrapper(connect(mapStateToProps)(App));
