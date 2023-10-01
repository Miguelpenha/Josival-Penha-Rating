import styled from 'styled-components'
import Button from '../../components/Button'

export const Container = styled.main`
    display: flex;
    margin-bottom: 8em;
    flex-direction: column;
`

export const Title = styled.h1`
    margin-top: 14vh;
    font-size: 2.2em;
    align-self: center;
    text-align: center;
    margin-bottom: 1.5em;

    @media screen and (max-width: 900px) {
        font-size: 1.5em;
    }
`

export const LoggedAs = styled.div`
    width: 21rem;
    display: flex;
    padding: 1rem;
    align-self: center;
    border-radius: 10px;
    align-items: center;
    transform: scale(0.95);
    transition-duration: 0.15s;
    transition-timing-function: linear;
    background-color: ${props => props.theme.primary};

    @media screen and (max-width: 400px) {
        width: 95%;
        flex-direction: column;

        svg {
            margin-bottom: 1em;
        }

        span {
            word-break: break-all;
        }
    }

    svg {
        width: 2.1em;
        height: 2.1em;
        fill: ${props => props.theme.secondaryColor};
    }

    span {
        margin: auto;
        font-size: 1.2em;
        color: ${props => props.theme.secondaryColor};
    }
`

export const ButtonSpreadsheet = styled(Button)`
    margin-top: 2em;
    background-color: #00ac47;

    svg {
        fill:${props => props.theme.secondaryColor};
    }

    span {
        color: ${props => props.theme.secondaryColor};
    }
`

export const ButtonLogout = styled(Button)`
    margin-top: 3em;
    background-color: red;

    svg {
        fill: ${props => props.theme.secondaryColor};
    }

    span {
        color: ${props => props.theme.secondaryColor};
    }
`