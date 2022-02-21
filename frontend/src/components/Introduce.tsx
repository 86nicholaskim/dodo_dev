import React from "react";
import styled from "styled-components";

const StyledOl = styled.ol`
  position: absolute;
  left: calc(var(--space-8) * -1);
  background-color: #fff;
  box-shadow: var(--shadow-md);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-grey-04);
  z-index: 1;
  visibility: hidden;
  opacity: 0;
  transition: all var(--duration-slow) var(--easing-smooth);
  transform: translateY(var(--space-4));
  pointer-events: none;
  max-height: calc(100vh - 5rem);
  overflow: auto;
  min-width: 350px;
`;
const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
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
  padding-inline-start: 40px;
`;

function Introduce() {
  return (
    <StyledUl>
      <StyledLi>기능</StyledLi>
      <StyledLi>템플릿</StyledLi>
      <StyledLi>팀</StyledLi>
      <StyledLi>
        리소스
        <div>
          <StyledOl>
            <StyledLi>
              dodoist를 IFTTT, 알렉사, 구글 캘린더 등과 같은 툴과
              연결시키세요...
            </StyledLi>
            <StyledLi>
              dodoist를 즉시 실행하기 위해 알아야 할 모든 것이 있습니다.
            </StyledLi>
            <StyledLi>
              dodoist를 최대한으로 활용하기 위한 질문 답변 및 팁을 찾으세요.
            </StyledLi>
            <StyledLi>
              가장 인기 있는 생산성 방법론을 알아보고 당신에게 가장 적합한 것을
              찾으세요.
            </StyledLi>
          </StyledOl>
        </div>
      </StyledLi>
      <StyledLi>가격책정</StyledLi>
    </StyledUl>
  );
}

export default Introduce;
