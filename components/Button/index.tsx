import { ButtonHTMLAttributes, FC } from 'react'
import { Container, Text } from './style'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    sizeIcon?: number
    iconDirection?: 'left' | 'right'
}

const Button: FC<IProps> = ({ sizeIcon=2.1, onClick, iconDirection='left', children, title, ...props }) => {
    return (
        <Container sizeIcon={sizeIcon} onClick={onClick} {...props}>
            {iconDirection === 'left' && children}
            <Text>{title}</Text>
            {iconDirection === 'right' && children}
        </Container>
    )
}

export default Button