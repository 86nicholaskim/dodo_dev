import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  margin: 0;
`;

const Footer = (): JSX.Element => {
  return (
    <>
      <StyledFooter>Footer</StyledFooter>;
    </>
  );
};

export default Footer;
