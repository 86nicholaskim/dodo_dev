import React from "react";
import styled from "styled-components";
import AuthContainer from "../containers/AuthContainer";
import Introduce from "components/Introduce";

const TopBarDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

function TopBar() {
  return (
    <TopBarDiv>
      <Introduce />
      <AuthContainer />
    </TopBarDiv>
  );
}

export default TopBar;
