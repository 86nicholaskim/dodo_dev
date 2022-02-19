import React from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  overflow: hidden;
`;

function Main({ children, ...rest }) {
  return <StyledMain {...rest}>{children}</StyledMain>;
}

export default Main;
