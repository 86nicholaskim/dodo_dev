import React from "react";
import ReactDOM from "react-dom";
import Main from "./containers/Main";

const App = () => {
  return (
    <>
      <Main>
        <div>
          <header>
            <nav>
              <a></a>
              <div>
                <ul>
                  <li></li>
                </ul>
                <ul>
                  <li></li>
                </ul>
                <ul>
                  <li></li>
                </ul>
              </div>
            </nav>
          </header>
        </div>
      </Main>
      <h1>Hello dodo World!</h1>
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
