import React from "react";
import styled from "styled-components";
import Login from "components/Login";
import Register from "components/Register";

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
          <Login />
        </StyledLi>
        <StyledLi {...rest}>
          <Register />
        </StyledLi>
      </StyledUl>
    </>
  );
}

export default Auths;
