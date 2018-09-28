import React from "react";
import dynamic from "next/dynamic";
import { Provider } from "react-redux";
import store from "../core/app.store";
//import Home from "./home";
const Home = dynamic(import("./home"), {
  loading: () => <div>.... loading</div>
});
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
export default App;
