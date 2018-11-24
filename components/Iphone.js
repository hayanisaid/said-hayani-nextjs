import React from "react";
import axios from "axios";
import ErrorBoundrais from "./ErrorBoundrais";

class Iphone extends React.Component {
  state = {
    isLoaded: false,
    hasError: false
  };
  async loadMeduimProfile() {
    try {
      let url = "https://medium.com/@saidhayani";
      let result = await axios.get(url);
      if (result) {
        setTimeout(() => {
          this.setState(state => ({ ...state, isLoaded: true }));
        }, 4000);
      }
      this.setState(state => ({ ...state, isLoaded: true }));
    } catch (err) {
      this.setState({ hasError: true });
    }
  }
  //disable click on preview
  handleClick = () => {
    return false;
  };
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
        <div className="preview" onClick={this.handleClick}>
          {this.state.isLoaded ? (
            <object
              className="img_preview"
              type="text/html"
              data="https://medium.com/@saidhayani"
              style={{ width: "100%", height: "100%" }}
              onClick={() => false}
            />
          ) : (
            <div>
              {!this.state.hasError ? (
                <div className="iphone_placeholder">
                  {/* <p lassName="iphone_placeholder_paragraph">loading ...</p> */}
                  <img
                    className="iphone_placeholder_spinner"
                    src="./../static/images/spinner.svg"
                  />
                </div>
              ) : (
                <div>
                  <img src="/static/images/desktop.svg" width="100%" />
                  <span>An Error accured! please try again ❤️</span>
                </div>
              )}
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
