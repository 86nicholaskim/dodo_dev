import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  margin: 0;
`;

function Section({ children, title, ...rest }) {
  return (
    <StyledSection {...rest}>
      {children}
      {title}
    </StyledSection>
  );
}

export default Section;
