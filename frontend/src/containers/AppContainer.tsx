import React from "react";
import styled from "styled-components";

import App from "../components/App";

const StyledAppContainer = styled.div`
  overflow: hidden;
`;

function AppContainer() {
  // 로그인상태면 로그인 후 페이지로 이동. 아니면 메인페이지로 이동
  return (
    <>
      <StyledAppContainer>
        <App />
      </StyledAppContainer>
    </>
  );
}

export default AppContainer;
