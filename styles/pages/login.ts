import styled from 'styled-components'
import Button from '../../components/Button'

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

export const ButtonGoogle = styled(Button)`
    background-color: ${props => props.theme.primary};

    span {
        color: ${props => props.theme.secondaryColor};
    }

    svg {
        fill: ${props => props.theme.secondaryColor};
    }
`