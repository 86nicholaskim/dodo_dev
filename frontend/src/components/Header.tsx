import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
    padding: 0 var(--space-16);
    transition: background-color var(--duration-slow) var(--easing-smooth);
    background-color: #fff;
    height: var(--space-64);
`

type Props = {
    children: JSX.Element
}

//expression

const Header: React.FC<Props> = ({ children }) => (
    <StyledHeader>{children}</StyledHeader>
)

export default Header
