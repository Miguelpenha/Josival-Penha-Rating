import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
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
    max-width: 25em;
    font-size: 1rem;
    margin-top: 1em;
    align-self: center;
    border-radius: 15px;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    color: ${props => props.theme.backgroundColor};
    box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 8px -1px;
    background-color: ${props => props.theme.primary};

    :focus {
        outline: none;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 16px -1px;
    }

    ::placeholder {
        color: ${props => props.theme.backgroundColorSecondary};
    }
`