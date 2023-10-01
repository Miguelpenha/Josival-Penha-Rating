import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.main`
    display: flex;
    margin-bottom: 8em;
    flex-direction: column;
`

export const ContainerIconSettings = styled(Link)`
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

export const IconSettings = styled.svg`
    width: 100%;
    fill: ${props => props.theme.primary};
`

export const Title = styled.h1`
    margin-top: 16vh;
    font-size: 2.2em;
    align-self: center;
    text-align: center;
    margin-bottom: 1.5em;

    @media screen and (max-width: 900px) {
        font-size: 1.5em;
    }
`

export const Input = styled.input`
    width: 80%;
    border: none;
    padding: 1rem;
    font-size: 1rem;
    margin-top: 1em;
    max-width: 25em;
    align-self: center;
    border-radius: 15px;
    transform: scale(0.95);
    transition-duration: 0.2s;
    transition-timing-function: linear;
    color: ${props => props.theme.backgroundColor};
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 5px -1px;
    background-color: ${props => props.theme.primary};

    :focus {
        outline: none;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 10px -1px;
    }

    ::placeholder {
        color: ${props => props.theme.backgroundColorSecondary};
    }
`