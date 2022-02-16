import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  margin: 0;
`;

type Props = {
  children: JSX.Element;
};

//expression

const Header: React.FC<Props> = ({ children }) => (
  <StyledHeader>
    {children}
    Header
  </StyledHeader>
);

/*
//decration
function Header({ children }: PropsWithChildren<Props>): React.ReactNode {
  return (
    <StyledHeader>
      {children}
      Header
    </StyledHeader>
  );
}
*/
export default Header;
