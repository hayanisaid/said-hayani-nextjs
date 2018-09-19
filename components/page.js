import React from "react";
import Nav from "./nav";
import Footer from "./footer";
import style from "../styles/style.styl";
class Page extends React.Component {
  render() {
    return (
      <div className="container">
        <style dangerouslySetInnerHTML={{ __html: style.replace(/\n/g, "") }} />
        <Nav cName="navigator" />
        <div className="main">{this.props.children}</div>
        {/* <Footer cName="footer" /> */}

        <style jsx>{``}</style>
      </div>
    );
  }
}

export default Page;
