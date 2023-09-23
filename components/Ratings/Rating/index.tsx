import { IRating, IStudent } from '../../../types'
import { KeyedMutator } from 'swr'
import { FC } from 'react'
import useHandleDelete from './useHandleDelete'
import { Container, Text, IconDelete } from './style'

interface IProps {
    student: string
    rating: IRating
    mutate: KeyedMutator<IStudent>
}

const Rating: FC<IProps> = ({ student, rating, mutate }) => {
    const handleDelete = useHandleDelete(student, rating._id)

    return (
        <Container href={`/students/${student}/ratings/${rating._id}`}>
            <Text>{rating.date}</Text>
            <IconDelete onClick={async event => {
                event.stopPropagation()
                event.nativeEvent.preventDefault()

                await handleDelete()

                await mutate()
            }} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm80-160h80v-360h-80v360Zm160 0h80v-360h-80v360Z"/>
            </IconDelete>
        </Container>
    )
}

export default Rating