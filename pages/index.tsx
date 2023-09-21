import { IStudent } from '../types'
import { FC, useState } from 'react'
import Head from 'next/head'
import { Container, Title, Input } from '../styles/pages'
import CreateStudent from '../components/CreateStudent'
import Student from '../components/Student'
import { GetServerSideProps } from 'next'
import studentsRaw from '../services/students'

interface IProps {
    students: IStudent[]
}

const Home: FC<IProps> = ({ students }) => {
    const [find, setFind] = useState('')

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
            {students.map((student, index) => {
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

export const getServerSideProps: GetServerSideProps<IProps> = async () => {
    const students = studentsRaw

    return { props: { students } }
}

export default Home