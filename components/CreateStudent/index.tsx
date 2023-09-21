import { FC } from 'react'
import { Container, Text, Icon } from './style'

interface IProps {
    find: string
}

const CreateStudent: FC<IProps> = ({ find }) => {
    return (
        <Container href={`/students/create${find ? `?name=${find}` : ''}`}>
            <Text>Cadastrar aluno {find}</Text>
            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
            </Icon>
        </Container>
    )
}

export default CreateStudent