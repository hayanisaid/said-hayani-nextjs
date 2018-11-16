import React from "react";
import Nav from "./nav";
import Footer from "./footer";
import style from "../styles/style.styl";
import MobileBtn from "./mobilebtn";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Wrapper from "./wrapper";
import { ActionInvorkers } from "./actions/menu.action";
class Page extends React.Component {
  constructor(props) {
    super(props);
  }
  openMenu() {
    //this.props.openMenu();
    let nav = document.querySelector(".navigator");
    nav.classList.toggle("toggle");
    console.log("hello");
  }
  componentDidMount() {
    console.log("menu props");
    console.log(this.props);
  }
  render() {
    return (
      <div
        className={`container ${
          this.props.NightMode !== undefined ? this.props.nightBackground : null
        }`}
      >
        <style dangerouslySetInnerHTML={{ __html: style.replace(/\n/g, "") }} />
        <MobileBtn onClick={this.openMenu.bind(this)} />
        <Nav />
        <div className="main">{this.props.children}</div>
        {/* <Footer cName="footer" /> */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    openMenu: state.openMenu,
    NightMode: state.NightMode,
    nightBackground: state.NightMode.nightBackground,
    nightText: state.NightMode.nightText,
    nightCard: state.NightMode.night_card
  };
};
const mapDispatchersToProps = dispatcher => {
  return bindActionCreators(ActionInvorkers, dispatcher);
};
export default connect(
  mapStateToProps,
  mapDispatchersToProps
)(Page);
