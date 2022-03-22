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
    :hover {
        text-decoration: none;
    }
`

function AuthLogin() {
    return <StyledLink to="/users/showlogin">로그인</StyledLink>
}

export default AuthLogin
