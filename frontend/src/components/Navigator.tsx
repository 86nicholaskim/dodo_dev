import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const StyledNavigator = styled.nav`
    display: flex;
    position: relative;
    align-items: center;
    flex: 1 1;
    min-height: var(--space-48);

    margin: 0 auto;
    max-width: 1088px;
    height: 100%;
`

type Props = {}

const Navigator = ({ children }: PropsWithChildren<Props>): JSX.Element => {
    return <StyledNavigator>{children}</StyledNavigator>
}

export default Navigator
