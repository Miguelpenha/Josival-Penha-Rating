import { IRating } from '../../../types'
import { FC } from 'react'
import { Container, Text } from './style'

interface IProps {
    student: string
    rating: IRating
}

const Rating: FC<IProps> = ({ student, rating }) => {
    return (
        <Container href={`/students/${student}/ratings/${rating._id}`}>
            <Text>{rating.date}</Text>
        </Container>
    )
}

export default Rating