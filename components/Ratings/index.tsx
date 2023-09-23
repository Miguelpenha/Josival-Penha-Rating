import { FC } from 'react'
import api from '../../services/api'
import { IStudent } from '../../types'
import { Container, Loading } from './style'
import Rating from './Rating'
import useSortRatings from '../useSortRatings'

interface IProps {
    id: string
}

const Ratings: FC<IProps> = ({ id }) => {
    const { data: student, mutate } = api.get<IStudent>(`/students/get/${id}?fields=ratings`)
    const ratings = useSortRatings(student?.ratings)

    if (ratings) {
        return (
            <Container>
                {ratings.map((rating, index) => (
                    <Rating student={id} key={index} rating={rating} mutate={mutate}/>
                ))}
            </Container>
        )
    } else {
        return <Loading speed={0.8} size={80} weight={8}/>
    }
}

export default Ratings