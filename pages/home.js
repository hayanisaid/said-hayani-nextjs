import React from "react";
import { connect } from "react-redux";
//import Link from "next/link";
import Head from "../components/Head";
import dynamic from "next/dynamic";
import Page from "../components/Page";
import Wrapper from "../components/Wrapper";
import Loading from "../components/Loading";
// import Splitter from "../components/splitter";
// import Scale from "./../components/scale";
// import Circle from "../components/animated-circle";
// import Iphone from "./../components/iphone";
//import Description from "./../components/Description";
import Picture from "../components/Picture";
const Description = dynamic(import("./../components/Description"), {
  loading: () => <Loading />
});
// const Picture = dynamic(import("../components/Picture"), {
//   loading: () => <div>.... loading</div>
// });

//import css from "./../styles/sass.scss";
//const imgProfile = require("./../static/said.png");
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      scale: false
    };
    //  this.HandelSplitterWidth = this.HandelSplitterWidth.bind(this);
  }

  componentDidMount() {
    //console.log("window height");
    //  console.log(window.innerHeight);
    const margin = 16; // In my case was marginTop: 8px and marginBottom: 8px
    const height = document.body.scrollHeight - margin;
    // let height = window.innerHeight;
    this.setState({ height: height });
  }

  HandelSplitterWidth(e) {
    // console.log(e.clientX);
    // console.log(window.innerWidth);
    let width = (e.clientX - innerHeight / 2) * 1;
    this.setState({ width });
  }

  render() {
    return (
      <Page>
        <Head title="Home" style={{ height: this.state.height }} />
        <div
          className={`wrapper  ${this.props.NightMode.homeClass}`}
          onMouseMove={vm => {
            this.HandelSplitterWidth(vm);
          }}
        >
          <Description {...this.props} />
          <Picture {...this.props} />
        </div>

        {/* <Splitter width={this.state.width} /> */}
      </Page>
    );
  }
}

const mapStateToProps = state => {
  return {
    NightMode: state.NightMode
  };
};

//export default Home;
export default Wrapper(connect(mapStateToProps)(Home));
const sayHello = () => {
  return "hello";
};
