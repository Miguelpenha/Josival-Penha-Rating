import { IStudent } from '../../types'
import { FC } from 'react'
import { Container } from './style'

interface IProps {
    student: IStudent
}

const Student: FC<IProps> = ({ student }) => {
    return (
        <Container href={`/student/${student.id}`}>{student.name}</Container>
    )
}

export default Student