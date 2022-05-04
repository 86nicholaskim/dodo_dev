import React, { useState, SyntheticEvent } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Icon from './Icon'

const StyledOlDiv = styled.div`
    padding-top: var(--space-4);
`
const StyledOl = styled.ol`
    position: absolute;
    left: calc(var(--space-8) * -1);
    background-color: #fff;
    box-shadow: var(--shadow-md);
    border-radius: var(--radius-md);
    border: 1px solid var(--color-grey-04);
    z-index: 1;
    visibility: hidden;
    opacity: 1;
    transition: all var(--duration-slow) var(--easing-smooth);
    transform: translateY(var(--space-4));
    pointer-events: none;
    max-height: calc(100vh - 5rem);
    overflow: auto;
    min-width: 350px;
`
const StyledLi = styled.li`
    :hover {
        text-decoration: none;
        color: var(--color-grey-08);
        background: var(--color-grey-01);
    }
`

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    padding: var(--space-16) var(--space-24);

    :hover {
        text-decoration: none;
    }
`
const StyledButtonDiv = styled.div`
    position: relative;
    display: inline-block;
    margin: 0;
    padding: 0;
    border: 0;
    &:hover ${StyledOl} {
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
    }
`
const StyledSpanDiv = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    color: var(--color-grey-07);
`
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
`
const StyledSpan1 = styled.span`
    font-size: 1rem;
    text-align: 'center';
`
const StyledSpan2 = styled.span`
    text-align: 'left';
    color: var(--color-grey-08);
    margin-bottom: var(--space-4);
    margin-left: var(--space-8);
    margin-bottom: 0;
`

const StyledSpan3 = styled.span`
    text-align: 'left';

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
    padding-left: var(--space-12);
    margin-bottom: 0;
`

const StyledSvg = styled(Icon)`
    fill: 'currentColor';

    transform: translateY(2px);
    color: var(--color-grey-06);
    margin-left: var(--space-4);
    transition: var(--easing-smooth) var(--duration-slow);
`
const StyledHr = styled.hr`
    margin-block-start: var(--spacing);
    margin-block-end: var(--spacing);
    height: 1px;
    border: 0;

    background-color: var(--color-grey-04);
    margin: var(--space-4) var(--space-24);
`

interface buttonProps {
    label?: string
    linkList?: string[]
    isVisible?: boolean
    hideLayerList?: any
}

function ButtonWithLayer({ label, linkList }: buttonProps) {
    return (
        <StyledButtonDiv>
            <StyledButton>
                <StyledSpan1>{label ? label : '리소스'}</StyledSpan1>
                <StyledSvg viewBox="0 0 24 24" width="24" height="20">
                    <path
                        fillRule="evenodd"
                        d="M4.646 8.646a.5.5 0 01.708 0L12 15.293l6.646-6.647a.5.5 0 01.708.708l-7 7a.5.5 0 01-.708 0l-7-7a.5.5 0 010-.708z"
                        clipRule="evenodd"
                    ></path>
                </StyledSvg>
            </StyledButton>
            <StyledOlDiv>
                <StyledOl>
                    <StyledLi>
                        <StyledLink to="">
                            <StyledSpanDiv>
                                <StyledSpan2>통합</StyledSpan2>
                                <StyledSpan3>
                                    dodoist를 IFTTT, 알렉사, 구글 캘린더 등과
                                    같은 툴과 연결시키세요...
                                </StyledSpan3>
                            </StyledSpanDiv>
                        </StyledLink>
                        <StyledHr />
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to="">
                            <StyledSpanDiv>
                                <StyledSpan2>시작하기 가이드</StyledSpan2>
                                <StyledSpan3>
                                    dodoist를 즉시 실행하기 위해 알아야 할 모든
                                    것이 있습니다.
                                </StyledSpan3>
                            </StyledSpanDiv>
                        </StyledLink>
                        <StyledHr />
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to="">
                            <StyledSpanDiv>
                                <StyledSpan2>도움말 센터</StyledSpan2>
                                <StyledSpan3>
                                    dodoist를 최대한으로 활용하기 위한 질문 답변
                                    및 팁을 찾으세요.
                                </StyledSpan3>
                            </StyledSpanDiv>
                        </StyledLink>
                        <StyledHr />
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to="">
                            <StyledSpanDiv>
                                <StyledSpan2>생산선 + 방법론</StyledSpan2>
                                <StyledSpan3>
                                    가장 인기 있는 생산성 방법론을 알아보고
                                    당신에게 가장 적합한 것을 찾으세요.
                                </StyledSpan3>
                            </StyledSpanDiv>
                        </StyledLink>
                        <StyledHr />
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to="">
                            <StyledSpanDiv>
                                <StyledSpan2>블로그</StyledSpan2>
                                <StyledSpan3>
                                    다른 곳에서 찾아 볼 수 없는 생산성 조언,
                                    그리고 Todoist 팁 및 제품 소식이 있습니다.
                                </StyledSpan3>
                            </StyledSpanDiv>
                        </StyledLink>
                    </StyledLi>
                </StyledOl>
            </StyledOlDiv>
        </StyledButtonDiv>
    )
}

export default ButtonWithLayer
