import { useState } from 'react'
import api from '../services/api'
import { IStudent } from '../types'
import Head from 'next/head'
import { Container, Title, Input } from '../styles/pages'
import CreateStudent from '../components/CreateStudent'
import Student from '../components/Student'

function Home() {
    const [find, setFind] = useState('')
    const { data: students } = api.get<IStudent[]>('/students')

    return <>
        <Head>
            <title>Avaliação - Josival Penha</title>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="description" content="Avaliação - Josival Penha"/>
            <meta property="og:title" content="Avaliação - Josival Penha"/>
            <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN}/>
            <meta property="og:description" content="Avaliação - Josival Penha"/>
            <meta property="og:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}/img/thumbnail.png`}/>
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