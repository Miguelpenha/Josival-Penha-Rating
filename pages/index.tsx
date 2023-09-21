import { useState } from 'react'
import api from '../services/api'
import { IStudent } from '../types'
import Head from 'next/head'
import { Container, Title, Input } from '../styles/pages'
import CreateStudent from '../components/CreateStudent'
import Student from '../components/Student'
import getServerSidePropsAuth from '../utils/getServerSidePropsAuth'

function Home() {
    const [find, setFind] = useState('')
    const { data: students } = api.get<IStudent[]>('/students')

    return <>
        <Head>
            <title>Avaliação - Josival Penha</title>
        </Head>
        <Container>
            <Title>Pesquisar aluno</Title>
            <Input
                name="find"
                value={find}
                placeholder="Nome do aluno..."
                onChange={ev => setFind(ev.target.value)}
            />
            <CreateStudent find={find}/>
            {students && students.map((student, index) => {
                const isInFind = student.name.toUpperCase().includes(find.toUpperCase())

                if (isInFind) {
                    return (
                        <Student key={index} student={student}/>
                    )
                }
            })}
        </Container>
    </>
}

export default Home

export const getServerSideProps = getServerSidePropsAuth