import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: block;
`;

const Footer = (): JSX.Element => {
  return (
    <>
      <StyledFooter>Footer</StyledFooter>;
    </>
  );
};

export default Footer;
