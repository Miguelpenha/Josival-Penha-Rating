import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.main`
    display: flex;
    margin-top: 3em;
    flex-direction: column;
`

export const Title = styled.h1`
    width: 80%;
    margin-top: 6vh;
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

export const ButtonRating = styled(Link)`
    width: 80%;
    border: none;
    display: flex;
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
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 8px -1px;
    background-color: ${props => props.theme.primary};

    :hover {
        transform: scale(1);
    }

    svg {
        width: 2em;
        margin-right: 1em;
        fill: ${props => props.theme.secondaryColor};
    }

    span {
        max-width: 100%;
        font-size: 1.4em;
        overflow: hidden;
        font-weight: bold;
        align-self: center;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: ${props => props.theme.secondaryColor};
    }
`