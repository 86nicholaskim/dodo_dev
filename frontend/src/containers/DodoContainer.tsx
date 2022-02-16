import React from "react";

const DodoContainer = (): JSX.Element => (
  <>
    <div style={{ display: "block", backgroundColor: "green", height: "44px" }}>
      <h1>top bar</h1>
    </div>
    <div style={{ display: "flex", backgroundColor: "orange" }}>
      <div
        style={{
          display: "block",
          backgroundColor: "gray",
          width: "300px",
          height: "100vh",
        }}
      >
        LEFT MENU
        <a style={{ display: "block" }}>LINK 1</a>
        <a style={{ display: "block" }}>LINK 2</a>
        <a style={{ display: "block" }}>LINK 3</a>
      </div>
      <h1>App Holder</h1>
    </div>
  </>
);

export default DodoContainer;
