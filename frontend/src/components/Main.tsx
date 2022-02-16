import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  overflow: hidden;
`;

type Props = {};

const Main = ({ children, ...rest }: PropsWithChildren<Props>): JSX.Element => {
  return <StyledMain {...rest}>{children}</StyledMain>;
};

export default Main;
