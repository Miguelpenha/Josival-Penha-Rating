import { useState } from 'react'
import students from '../services/students'
import Head from 'next/head'
import { Container, Title, Input } from '../styles/pages'
import Student from '../components/Student'

function Home() {
    const [student, setStudent] = useState('')

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
                name="student"
                value={student}
                placeholder="Nome do aluno..."
                onChange={ev => setStudent(ev.target.value)}
            />
            {students.map((studentMap, index) => {
                if (studentMap.name.toUpperCase().includes(student.toUpperCase())) {
                    return (
                        <Student key={index} student={studentMap}/>
                    )
                }
            })}
        </Container>
    </>
}

export default Home