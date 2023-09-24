import styled from 'styled-components'

export const Container = styled.div`
    width: 80%;
    padding: 1em;
    display: flex;
    border-radius: 10px;
    flex-direction: column;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 5px -1px;
    background-color: ${props => props.theme.backgroundColor};
`

export const Name = styled.textarea`
    border: none;
    resize: none;
    font-size: 1em;
    text-align: left;
    font-weight: bold;
    padding-left: 0.4em;
    color: ${props => props.theme.primary};
    border-left: 2px solid ${props => props.theme.primary};

    :focus {
        outline: none;
    }
`

export const Response = styled.textarea`
    border: none;
    resize: none;
    margin-top: 1em;
    padding-top: 1em;
    font-size: 1.2em;
    color: ${props => props.theme.secondary};
    border-top: 1px solid ${props => props.theme.primary};

    :focus {
        outline: none;
    }
`