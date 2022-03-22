import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import ButtonWithLayer from './ButtonWithLayer'

const StyledUl = styled.ul`
    display: flex;
    align-items: center;
    height: 100%;

    margin-inline-start: 0px;
    margin-inline-end: 0px;
`
const StyledLiFlex = styled.li`
    height: 100%;
    display: flex;
    cursor: pointer;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    :hover {
        text-decoration: none;
        color: var(--color-grey-08);
        background: var(--color-grey-01);
        border-bottom: 2px solid var(--main-color);
    }
`

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
    :hover {
        text-decoration: none;
    }
`

function Introduce() {
    return (
        <StyledUl>
            <StyledLiFlex>
                <StyledLink to="">기능</StyledLink>
            </StyledLiFlex>
            <StyledLiFlex>
                <StyledLink to="">템플릿</StyledLink>
            </StyledLiFlex>
            <StyledLiFlex>
                <StyledLink to="">팀</StyledLink>
            </StyledLiFlex>
            <StyledLiFlex>
                <ButtonWithLayer label={'리소스'} />
            </StyledLiFlex>
            <StyledLiFlex>
                <StyledLink to=""> 가격책정</StyledLink>
            </StyledLiFlex>
        </StyledUl>
    )
}

export default Introduce
