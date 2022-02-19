import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import AppContainer from "./containers/AppContainer";

const App = () => {
  return (
    <>
      <AppContainer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
