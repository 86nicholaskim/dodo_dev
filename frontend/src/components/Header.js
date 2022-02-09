import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  margin: 0;
`;

function Header({ children, ...rest }) {
  return (
    <StyledHeader {...rest}>
      {children}
      Header
    </StyledHeader>
  );
}

export default Header;
