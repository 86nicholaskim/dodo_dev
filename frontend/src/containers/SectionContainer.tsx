import React from "react";
import styled from "styled-components";
import Sections from "components/Sections";
const StyledSectionContainerDiv = styled.section`
  position: relative;
  overflow: hidden;
  text-align: center;
  white-space: pre-line;
`;

function SectionContainer() {
  return (
    <StyledSectionContainerDiv>
      <Sections />
    </StyledSectionContainerDiv>
  );
}

export default SectionContainer;
