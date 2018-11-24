import React, { Component } from "react";

import { Provider } from "react-redux";
import store from "../core/app.store";

const Wrapper = Page => {
  return class PageWrapper extends Component {
    render() {
      return (
        <Provider store={store}>
          <React.Fragment>
            <Page />
          </React.Fragment>
        </Provider>
      );
    }
  };
};

export default Wrapper;
