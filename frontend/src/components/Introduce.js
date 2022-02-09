import React from "react";
import styled from "styled-components";

const StyledOl = styled.ol``;
const StyledUl = styled.ul``;
const StyledLi = styled.li``;

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
