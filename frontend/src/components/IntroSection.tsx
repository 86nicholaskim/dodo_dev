import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import { Link } from 'react-router-dom'
import IntroImg from '../assets/images/header.webp'

const StyledLink = styled(Link)`
    color: #fff;
    border-color: #246fe0;
    background-color: #246fe0;

    --curr-font-size: var(--heading-sm-font-size);
    --curr-line-height: var(--heading-sm-line-height);
    --curr-letter-spacing: var(--heading-sm-letter-spacing);
    --curr-font-weight: var(--heading-sm-font-weight);
    --curr-text-transform: var(--heading-sm-text-transform);

    margin-block-start: 2rem;
    padding: var(--space-8) var(--space-24);
    min-height: 2.75rem;
    border-radius: 0.625rem;

    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    border: 1px solid;
    overflow: visible;
    white-space: normal;
    text-transform: none;
    vertical-align: middle;
    cursor: pointer;
    transition: var(--duration-slow) var(--easing-smooth);

    user-select: none;
    min-width: 100px;
    outline: none;
    :hover {
        text-decoration: none;
    }
    :focus {
        box-shadow: var(--shadow-focus);
    }
`
const StyledSection = styled.section`
    position: relative;
    overflow: hidden;
    text-align: center;
    white-space: pre-line;
`
const StyledDiv = styled.div`
    position: relative;
    text-align: center;
    white-space: pre-line;

    padding: var(--space-top-hero-section) var(--space-16) 0;
    margin-block-end: -10rem;
    position: relative;
    margin-block-start: var(--space-48);
`

const StyledH1 = styled.h1`
    --curr-font-size: var(--heading-4xl-font-size);
    --curr-line-height: var(--heading-4xl-line-height);
    --curr-letter-spacing: var(--heading-4xl-letter-spacing);
    --curr-font-weight: var(--heading-4xl-font-weight);
    --curr-text-transform: var(--heading-4xl-text-transform);
    font-size: var(--curr-font-size);
    line-height: var(--curr-line-height);
    letter-spacing: var(--curr-letter-spacing);
    font-weight: var(--curr-font-weight);
    text-transform: var(--curr-text-transform);

    position: relative;
`
const StyledImg = styled.img`
    inline-size: 90%;
    max-inline-size: 1256px;
    display: block;
    margin: 0 auto;
`

function IntroSection() {
    return (
        <StyledSection>
            <StyledDiv>
                <StyledH1>Dodoist와 함께 체계적으로 일하세요</StyledH1>
                <StyledLink to="">빠른 가이드</StyledLink>
            </StyledDiv>
            <StyledImg src={IntroImg} />
        </StyledSection>
    )
}

export default IntroSection
