import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.main`
    display: flex;
    margin-top: 3em;
    flex-direction: column;
`

export const Title = styled.h1`
    width: 90%;
    margin-top: 6vh;
    font-size: 2.2em;
    align-self: center;
    text-align: center;
    margin-bottom: 1.5em;

    @media screen and (max-width: 900px) {
        font-size: 1.5em;
    }
`

export const ButtonRating = styled(Link)`
    width: 15em;
    padding: 1em;
    display: flex;
    margin-top: 4em;
    align-self: center;
    margin-bottom: 7em;
    border-radius: 10px;
    align-items: center;
    text-decoration: none;
    transform: scale(0.95);
    transition-duration: 0.15s;
    transition-timing-function: linear;
    background-color: ${props => props.theme.primary};

    :hover {
        transform: scale(1);
        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px 4px;
    }

    svg {
        width: 2em;
        fill: ${props => props.theme.secondaryColor};
    }

    span {
        font-size: 2em;
        font-weight: bold;
        margin-left: auto;
        margin-right: auto;
        color: ${props => props.theme.secondaryColor};
    }
`