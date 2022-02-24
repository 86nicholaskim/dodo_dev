import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Icon from "./Icon";

const StyledOlDiv = styled.div`
  padding-top: var(--space-4);
`;

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

const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  color: var(--color-grey-07);
  text-align: center;
  padding: 0 var(--space-16);
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  transition: all var(--easing-smooth) var(--duration-fast);

  --curr-font-size: var(--body-md-font-size);
  --curr-line-height: var(--body-md-line-height);
  --curr-letter-spacing: var(--body-md-letter-spacing);
  --curr-font-weight: var(--body-md-font-weight);
  --curr-text-transform: var(--body-md-text-transform);
  font-size: var(--curr-font-size);
  line-height: var(--curr-line-height);
  letter-spacing: var(--curr-letter-spacing);
  font-weight: var(--curr-font-weight);
  text-transform: var(--curr-text-transform);
`;

const StyledButtonDiv = styled.div`
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;
  border: 0;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  cursor: default;
  width: 100%;
  color: var(--color-grey-07);
  text-align: center;
  font-family: var(--font-family-sans);
  padding: 0 var(--space-12);
  height: 100%;
  background-color: #fff;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  transition: var(--easing-smooth) var(--duration-fast);
`;

const StyledSpan = styled.span`
  margin-left: var(--space-8);

  --curr-font-size: var(--body-md-font-size);
  --curr-line-height: var(--body-md-line-height);
  --curr-letter-spacing: var(--body-md-letter-spacing);
  --curr-font-weight: var(--body-md-font-weight);
  font-size: var(--curr-font-size);
  line-height: var(--curr-line-height);
  font-weight: var(--curr-font-weight);
  text-align: "center";
`;

const StyledSvg = styled(Icon)`
  fill: "currentColor";

  transform: translateY(2px);
  color: var(--color-grey-06);
  margin-left: var(--space-4);
  transition: var(--easing-smooth) var(--duration-slow);
`;

function Introduce() {
  return (
    <StyledUl>
      <StyledLi>
        <StyledLink to=""> 기능</StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink to=""> 템플릿</StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink to=""> 팀</StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledButtonDiv>
          <StyledButton>
            <StyledSpan>리소스</StyledSpan>
            <StyledSvg viewBox="0 0 24 24" width="24" height="20">
              <path
                fillRule="evenodd"
                d="M4.646 8.646a.5.5 0 01.708 0L12 15.293l6.646-6.647a.5.5 0 01.708.708l-7 7a.5.5 0 01-.708 0l-7-7a.5.5 0 010-.708z"
                clipRule="evenodd"
              ></path>
            </StyledSvg>
          </StyledButton>
        </StyledButtonDiv>

        <StyledOlDiv>
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
        </StyledOlDiv>
      </StyledLi>
      <StyledLi>
        <StyledLink to=""> 가격책정</StyledLink>
      </StyledLi>
    </StyledUl>
  );
}

export default Introduce;
