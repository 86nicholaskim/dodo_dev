import React from "react";
import ReactDOM from "react-dom";
import * as _ from "lodash";
import "./index.css";

import AppContainer from "./containers/AppContainer";

function App() {
  return (
    <>
      <h1>hihi</h1>
      <AppContainer />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
