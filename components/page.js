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
      <div className="container">
        <style dangerouslySetInnerHTML={{ __html: style.replace(/\n/g, "") }} />
        <MobileBtn onClick={this.openMenu.bind(this)} />
        <Nav />
        <div className="main">{this.props.children}</div>
        {/* <Footer cName="footer" /> */}

        <style jsx>{``}</style>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    openMenu: state.openMenu
  };
};
const mapDispatchersToProps = dispatcher => {
  return bindActionCreators(ActionInvorkers, dispatcher);
};
export default connect(
  mapStateToProps,
  mapDispatchersToProps
)(Page);
