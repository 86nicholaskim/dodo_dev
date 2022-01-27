import React from "react";
import ReactDOM from "react-dom";
import Main from "./containers/Main";
import "./index.css";

const App = () => {
  return (
    <>
      <Main>
        <div>
          <header>
            HEADER
            <nav>
              Navigator
              <a>LINK</a>
              <div>
                <ul>
                  <li>LIST_ITEM</li>
                </ul>
                <ul>
                  <li>LIST_ITEM</li>
                </ul>
                <ul>
                  <li>LIST_ITEM</li>
                </ul>
              </div>
            </nav>
          </header>
        </div>
        <section>SECTION_1</section>
        <section>SECTION_2</section>
        <section>SECTION_3</section>
        <section>SECTION_4</section>
        <section>SECTION_5</section>
        <footer>FOOTER</footer>
      </Main>
      <h1>Hello dodo World!</h1>
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
