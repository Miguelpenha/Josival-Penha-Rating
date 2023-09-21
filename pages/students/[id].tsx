import { IStudent } from '../../types'
import { FC } from 'react'
import api from '../../services/api'
import Head from 'next/head'
import { Container, Title } from '../../styles/pages/students/student'
import { GetServerSideProps } from 'next'

interface IProps {
    id: string
}

const Student: FC<IProps> = ({ id }) => {
    const { data: student } = api.get<IStudent>(`/students/get/${id}`)

    return <>
        <Head>
            <title>Aluno - Josival Penha</title>
        </Head>
        <Container>
            {student && <>
                <Title>{student.name}</Title>
            </>}
        </Container>
    </>
}

export const getServerSideProps: GetServerSideProps<IProps> = async (req) => {
    const id = req.query.id

    return { props: { id: id as string } }
}

export default Student