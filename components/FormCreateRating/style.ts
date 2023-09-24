import styled from 'styled-components'
import ButtonRaw from '../Button'

export const Container = styled.form`
    width: 80%;
    padding: 1em;
    display: flex;
    max-width: 35em;
    align-self: center;
    margin-bottom: 8em;
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

    ::-webkit-calendar-picker-indicator {
        ${props => (
            `
                background: url('data:image/svg+xml;utf8,<svg style="color: ${props.theme.primary.replace('#', '')};" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/></svg>');
            ` 
        )}
    }
`

export const Button = styled(ButtonRaw)`
    margin-top: 4em;
    margin-bottom: 2em;
`