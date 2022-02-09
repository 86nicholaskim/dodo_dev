import React from "react";
import Main from "components/Main";
import Sections from "components/Sections";
import HeaderContainer from "../containers/HeaderContainer";
import Footer from "components/Footer";

function MainContainer({ sections }) {
  return (
    <>
      <Main>
        <HeaderContainer />
        <Sections />
        <Footer />
      </Main>
    </>
  );
}

export default MainContainer;
