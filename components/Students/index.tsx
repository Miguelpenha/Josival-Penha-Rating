import { FC } from 'react'
import api from '../../services/api'
import { IStudent } from '../../types'
import Student from './Student'
import isInFind from './isInFind'
import { Loading } from './style'

interface IProps {
    find: string
}

const Students: FC<IProps> = ({ find }) => {
    const { data: students } = api.get<IStudent[]>('/students')

    if (students) {
        return <>
            {students.map((student, index) => {
                if (isInFind(student.name, find)) {
                    return (
                        <Student key={index} student={student}/>
                    )
                }
            })}
        </>
    } else {
        return <Loading speed={0.8} size={80} weight={8}/>
    }
}

export default Students