import React, { useState } from "react";
import DodoContainer from "../containers/DodoContainer";

import LoadingScreen from "./LoadingScreen";

function App(): JSX.Element {
  let [isloading, setState] = useState(true);

  let timer = setTimeout(() => {
    setState((prev) => false);
  }, 2000);

  return (
    <>
      {isloading ? (
        <LoadingScreen logoColor="#246fe0" ringThumbColor="#246fe0" />
      ) : (
        <DodoContainer />
      )}
    </>
  );
}

export default App;
