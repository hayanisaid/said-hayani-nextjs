import React from "react";
import dynamic from "next/dynamic";
import { connect } from "react-redux";
//import Home from "./home";

import Wrapper from "./../components/wrapper";
const Home = dynamic(import("./home"), {
  loading: () => (
    <div className="loading">
      <img src="/static/desktop.svg" />
    </div>
  )
});
class App extends React.Component {
  componentDidMount = () => {};

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
