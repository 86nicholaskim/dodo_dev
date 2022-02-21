import React from "react";
import Main from "components/Main";

import HeaderContainer from "../containers/HeaderContainer";
import SectionContainer from "../containers/SectionContainer";
import Footer from "components/Footer";
import styled from "styled-components";

function MainContainer() {
  return (
    <Main>
      <HeaderContainer />
      {/*<SectionContainer />*/}
      <Footer />
    </Main>
  );
}

export default MainContainer;
