import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledNavigator = styled.nav`
  margin: 0;
`;

type Props = {};

const Navigator = ({ children }: PropsWithChildren<Props>): JSX.Element => {
  return <StyledNavigator>{children}</StyledNavigator>;
};

export default Navigator;
