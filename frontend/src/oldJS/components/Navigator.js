import React from "react";
import styled from "styled-components";

const StyledNavigator = styled.nav`
  margin: 0;
`;

function Navigator({ children, ...rest }) {
  return <StyledNavigator {...rest}>{children}</StyledNavigator>;
}

export default Navigator;
