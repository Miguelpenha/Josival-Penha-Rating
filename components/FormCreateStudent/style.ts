import styled from 'styled-components'
import ButtonRaw from '../Button'

export const Container = styled.form`
    width: 80%;
    padding: 1em;
    display: flex;
    max-width: 35em;
    align-self: center;
    border-radius: 10px;
    flex-direction: column;
    background-color: ${props => props.theme.primary};
`

export const Field = styled.div`
    width: 90%;
    max-width: 25em;
    margin-top: 1em;
    align-self: center;
`

export const Label = styled.label`
    color: ${props => props.theme.secondaryColor};
`

export const Req = styled.span`
    color: red;
`

export const Input = styled.input`
    width: 100%;
    border: none;
    padding: 1rem;
    font-size: 1rem;
    margin-top: 0.5em;
    border-radius: 15px;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    color: ${props => props.theme.primary};
    box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 8px -1px;
    background-color: ${props => props.theme.backgroundColor};

    :focus {
        outline: none;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 16px -1px;
    }

    ::placeholder {
        color: ${props => props.theme.color};
    }
`

export const Button = styled(ButtonRaw)`
    margin-top: 4em;
    margin-bottom: 2em;
`