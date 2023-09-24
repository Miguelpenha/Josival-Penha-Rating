import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    margin-top: 3em;
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

export const Questions = styled.div`
    gap: 1em;
    padding: 2em;
    display: flex;
    flex-direction: column;
`

export const Question = styled.div`
    
`

export const NameQuestion = styled.h2`
    padding-left: 0.4em;
    margin-bottom: 0.2em;
    border-left: 2px solid ${props => props.theme.primary};
`

export const Response = styled.span`
    padding-left: 0.8em;
`