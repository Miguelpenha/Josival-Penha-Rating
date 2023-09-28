import styled from 'styled-components'

export const Container = styled.button`
    top: 0%;
    left: 0%;
    width: 5em;
    margin: 1em;
    border: none;
    padding: 1em;
    display: flex;
    cursor: pointer;
    border-radius: 25%;
    position: absolute;
    transition-duration: 0.2s;
    background-color: transparent;
    transition-timing-function: linear;

    :hover {
        border-radius: 50%;
        background-color: ${props => props.theme.backgroundColorSecondary};
    }
`

export const Icon = styled.svg`
    width: 100%;
    fill: ${props => props.theme.primary};
`