import styled from 'styled-components'

export const Container = styled.div`
    gap: 3em;
    width: 80%;
    padding: 1em;
    display: flex;
    max-width: 35em;
    align-self: center;
    border-radius: 15px;
    flex-direction: column;
    background-color: ${props => props.theme.primary};
`