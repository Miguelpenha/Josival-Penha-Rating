import styled from 'styled-components'

export const Container = styled.div`
    padding: 1em;
    display: flex;
    border-radius: 10px;
    flex-direction: column;
    background-color: ${props => props.theme.backgroundColor};
`

export const Name = styled.textarea`
    border: none;
    resize: none;
    padding-left: 0.5em;
    padding-bottom: 0.5em;
    transition-duration: 0.15s;
    border-bottom-left-radius: 5px;
    transition-timing-function: linear;
    border-left: 2px solid ${props => props.theme.primary};
    border-bottom: 2px solid ${props => props.theme.primary};

    :focus {
        outline: none;
        border-left-width: 3px;
        border-bottom-width: 3px;
        border-bottom-left-radius: 10px;
    }
`

export const Response = styled.textarea`
    border: none;
    resize: none;
    margin-top: 1em;
    padding-top: 1em;
    padding-bottom: 0.5em;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    border-bottom: 2px solid ${props => props.theme.secondary};

    :focus {
        outline: none;
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px;
        border-bottom: 4px solid ${props => props.theme.secondary};
    }
`