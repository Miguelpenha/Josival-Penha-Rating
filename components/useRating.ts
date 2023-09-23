import api from '../services/api'
import { IStudent, IRating } from '../types'
import { useEffect, useState } from 'react'

function useRating(idStudent: string, idRating: string) {
    const { data: student } = api.get<IStudent>(`/students/get/${idStudent}?fields=ratings`)
    const [rating, setRating] = useState<IRating>()

    useEffect(() => {
        student?.ratings.map(rating => {
            if (rating._id === idRating) {
                setRating(rating)
            }
        })
    }, [student?.ratings])

    return rating
}

export default useRating