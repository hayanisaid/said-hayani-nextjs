import React from "react";
import Placeholder from "./placeholder";
import axios from "axios";

class Iphone extends React.Component {
  state = {
    isLoaded: false
  };
  async loadMeduimProfile() {
    let url = "https://medium.com/@saidhayani";
    let result = axios.get(url);
    if (result) {
      this.setState(state => ({ ...state, isLoaded: true }));
      console.log("result==>", result);
    }
  }
  componentDidMount() {
    this.loadMeduimProfile();
  }
  render() {
    return (
      <div className="iphone_wrapper">
        {/* <img
          src="./../static/images/iphone.jpg"
          alt="iphone wrapper"
          className="iphone"
        /> */}
        <div className="preview">
          {this.state.isLoaded ? (
            <object
              className="img_preview"
              type="text/html"
              data="https://medium.com/@saidhayani"
              style={{ width: "100%", height: "100%" }}
            />
          ) : (
            <div className="iphone_placeholder">
              {/* <p lassName="iphone_placeholder_paragraph">loading ...</p> */}
              <img
                className="iphone_placeholder_spinner"
                src="./../static/images/spinner.svg"
              />
            </div>
          )}
          {/* <img
            src="./../static/images/preview.png"
            className="img_preview"
            alt="preview"
          /> */}
        </div>
      </div>
    );
  }
}

export default Iphone;
