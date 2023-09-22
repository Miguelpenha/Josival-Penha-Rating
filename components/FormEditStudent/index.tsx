import api from '../../services/api'
import { IStudent } from '../../types'
import { FC, useState } from 'react'
import useHandleSubmit from './useHandleSubmit'
import useHandleDelete from './useHandleDelete'
import { Container, Field, Label, Req, Input, Buttons, Button, ButtonDelete } from './style'
import Loading from '../Loading'

interface IProps {
    student: IStudent
}

const FormEditStudent: FC<IProps> = ({ student }) => {
    const { data: students } = api.get<IStudent[]>('/students')
    const [name, setName] = useState(student.name)
    const handleSubmit = useHandleSubmit(name, student._id, students as IStudent[])
    const handleDelete = useHandleDelete(student._id)

    if (students) {
        return (
            <Container onSubmit={handleSubmit}>
                <Field>
                    <Label>Nome do aluno <Req>*</Req></Label>
                    <Input name="name" placeholder="Nome..." defaultValue={name} onChange={ev => setName(ev.target.value)}/>
                </Field>
                <Buttons>
                    <Button type="submit" disabled={name.trim().toUpperCase() === student.name.trim().toUpperCase()} title="Salvar">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Z"/>
                        </svg>
                    </Button>
                    <ButtonDelete type="button" title="Excluir" onClick={handleDelete}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm80-160h80v-360h-80v360Zm160 0h80v-360h-80v360Z"/>
                        </svg>
                    </ButtonDelete>
                </Buttons>
            </Container>
        )
    } else {
        return (
            <Loading speed={0.8} size={80} weight={8}/>
        )
    }
}

export default FormEditStudent