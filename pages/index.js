import React from "react";
import dynamic from "next/dynamic";
import { connect } from "react-redux";
import Loading from "../components/Loading";
//import Home from "./home";

import Wrapper from "../components/Wrapper";
const Home = dynamic(import("./home"), {
  loading: () => <Loading />
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
