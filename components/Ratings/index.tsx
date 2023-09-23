import { FC } from 'react'
import api from '../../services/api'
import { IStudent } from '../../types'
import { Container, Loading } from './style'
import Rating from './Rating'

interface IProps {
    id: string
}

const Ratings: FC<IProps> = ({ id }) => {
    const { data: student } = api.get<IStudent>(`/students/get/${id}?fields=ratings`)

    if (student) {
        return (
            <Container>
                {student.ratings.map((rating, index) => (
                    <Rating student={id} key={index} rating={rating}/>
                ))}
            </Container>
        )
    } else {
        return <Loading speed={0.8} size={80} weight={8}/>
    }
}

export default Ratings