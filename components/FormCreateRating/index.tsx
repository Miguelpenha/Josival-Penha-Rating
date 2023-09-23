import { FC, useState } from 'react'
import { IStudent } from '../../types'
import useHandleSubmit from './useHandleSubmit'
import { Container, Field, Label, Req, Input, Button } from './style'
import api from '../../services/api'

interface IProps {
    id: string
}

const FormCreateRating: FC<IProps> = ({ id }) => {
    const [date, setDate] = useState('')
    const { data: student } = api.get<IStudent>(`/students/get/${id}?fields=ratings`)
    const handleSubmit = useHandleSubmit(date, student as IStudent)

    return (
        <Container onSubmit={handleSubmit}>
            <Field>
                <Label>Data da avaliação <Req>*</Req></Label>
                <Input name="date" type="date" placeholder="Data..." onChange={ev => setDate(ev.target.value)}/>
            </Field>
            <Button title="Cadastrar">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                    <path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"/>
                </svg>
            </Button>
        </Container>
    )
}

export default FormCreateRating