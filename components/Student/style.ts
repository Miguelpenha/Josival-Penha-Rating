import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled(Link)`
    width: 80%;
    border: none;
    padding: 1rem;
    max-width: 25em;
    font-size: 1rem;
    margin-top: 1em;
    align-self: center;
    border-radius: 15px;
    text-decoration: none;
    transform: scale(0.95);
    transition-duration: 0.2s;
    transition-timing-function: linear;
    color: ${props => props.theme.primary};
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 8px -1px;
    border: 2px solid ${props => props.theme.primary};
    background-color: ${props => props.theme.backgroundColor};

    :hover {
        transform: scale(1);
    }
`