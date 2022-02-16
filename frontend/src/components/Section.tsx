import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  margin: 0;
`;

type Props = {
  title: string;
};

const Section = ({
  children,
  title,
  ...rest
}: PropsWithChildren<Props>): JSX.Element => {
  return (
    <StyledSection {...rest}>
      {children}
      {title}
    </StyledSection>
  );
};

export default Section;
