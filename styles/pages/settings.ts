import styled from 'styled-components'

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