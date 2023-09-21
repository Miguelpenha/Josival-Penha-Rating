import { IStudent } from '../../types'
import { FC } from 'react'
import { Container, Text } from './style'

interface IProps {
    student: IStudent
}

const Student: FC<IProps> = ({ student }) => {
    return (
        <Container href={`/students/${student._id}`}>
            <Text>{student.name}</Text>
        </Container>
    )
}

export default Student