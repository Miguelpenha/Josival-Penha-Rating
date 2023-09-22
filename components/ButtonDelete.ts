import styled from 'styled-components'
import Button from './Button'

const ButtonDelete = styled(Button)`
    background-color: red;
    
    span {
        color: ${props => props.theme.secondaryColor};
    }

    svg {
        fill: ${props => props.theme.secondaryColor};;
    }
`

export default ButtonDelete