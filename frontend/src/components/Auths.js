import React from "react";
import styled from "styled-components";
import AuthLogin from "components/AuthLogin";
import AuthRegister from "components/AuthRegister";

const StyledUl = styled.ul`
  margin: 0;
`;

const StyledLi = styled.li`
  margin: 0;
`;

function Auths({ ...rest }) {
  return (
    <>
      <StyledUl {...rest}>
        <StyledLi {...rest}>
          <AuthLogin />
        </StyledLi>
        <StyledLi {...rest}>
          <AuthRegister />
        </StyledLi>
      </StyledUl>
    </>
  );
}

export default Auths;
