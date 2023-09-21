import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled(Link)`
    width: 80%;
    border: none;
    padding: 1rem;
    display: flex;
    max-width: 25em;
    font-size: 1rem;
    margin-top: 2em;
    position: relative;
    align-self: center;
    border-radius: 15px;
    text-decoration: none;
    transform: scale(0.95);
    transition-duration: 0.2s;
    transition-timing-function: linear;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 8px -1px;
    background-color: ${props => props.theme.primary};

    :hover {
        transform: scale(1);
    }
`

export const Text = styled.span`
    max-width: 90%;
    overflow: hidden;
    align-self: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${props => props.theme.secondaryColor};
`

export const Icon = styled.svg`
    top: 0;
    bottom: 0;
    width: 2em;
    right: 3.5%;
    margin-top: auto;
    position: absolute;
    margin-bottom: auto;
    fill: ${props => props.theme.secondaryColor};
`