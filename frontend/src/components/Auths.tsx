import React from "react";
import styled from "styled-components";
import AuthLogin from "components/AuthLogin";
import AuthRegister from "components/AuthRegister";

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
const StyledLi = styled.li`
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const Auths = (): JSX.Element => {
  return (
    <>
      <StyledUl>
        <StyledLi>
          <AuthLogin />
        </StyledLi>
        <StyledLi>
          <AuthRegister />
        </StyledLi>
      </StyledUl>
    </>
  );
};

export default Auths;
