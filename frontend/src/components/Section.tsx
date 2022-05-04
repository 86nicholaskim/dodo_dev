import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
    position: relative;
    overflow: hidden;
    text-align: center;
    white-space: pre-line;
    margin: 0;
`

type Props = {
    title: string
}

const Section = ({
    children,
    title,
    ...rest
}: PropsWithChildren<Props>): JSX.Element => {
    return (
        <StyledSection {...rest}>
            {children}
            {title}
        </StyledSection>
    )
}

export default Section
