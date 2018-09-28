import React from "react";
import dynamic from "next/dynamic";
//import Home from "./home";
const Home = dynamic(import("./home"), {
  loading: () => <div>.... loading</div>
});
class App extends React.Component {
  render() {
    return <Home />;
  }
}
export default App;
