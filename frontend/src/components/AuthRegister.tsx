import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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

function AuthRegister() {
    return <StyledLink to="/users/showregister">가입</StyledLink>
}

export default AuthRegister
