import React from "react";
import ReactDOM from "react-dom";
import * as _ from "lodash";
import "./index.css";

import AppContainer from "./containers/AppContainer";

function Application() {
  return (
    <>
      <AppContainer />
    </>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));
