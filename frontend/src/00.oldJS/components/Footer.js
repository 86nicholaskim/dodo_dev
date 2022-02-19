import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  margin: 0;
`;

function Footer({ children, ...rest }) {
  return (
    <StyledFooter {...rest}>
      {children}
      Footer
    </StyledFooter>
  );
}

export default Footer;
