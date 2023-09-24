import { FC } from 'react'
import api from '../../services/api'
import { IStudent } from '../../types'
import useSortRatings from '../useSortRatings'
import { Container, Loading } from './style'
import isInFind from './isInFind'
import Rating from './Rating'

interface IProps {
    id: string
    find: string
}

const Ratings: FC<IProps> = ({ id, find }) => {
    const { data: student, mutate } = api.get<IStudent>(`/students/get/${id}?fields=ratings`)
    const ratings = useSortRatings(student?.ratings)

    if (ratings) {
        return (
            <Container>
                {ratings.map((rating, index) => {
                    if (isInFind(rating.date, find)) {
                        return (
                            <Rating student={id} key={index} rating={rating} mutate={mutate}/>
                        )
                    }
                })}
            </Container>
        )
    } else {
        return <Loading speed={0.8} size={80} weight={8}/>
    }
}

export default Ratings