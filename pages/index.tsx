import { useState } from 'react'
import Head from 'next/head'
import { Container, Title, Input } from '../styles/pages'
import CreateStudent from '../components/CreateStudent'
import getServerSidePropsAuth from '../utils/getServerSidePropsAuth'
import Students from '../components/Students'

function Home() {
    const [find, setFind] = useState('')

    return <>
        <Head>
            <title>Avaliação - Josival Penha</title>
        </Head>
        <Container>
            <Title>Pesquisar aluno</Title>
            <Input
                name="find"
                value={find}
                placeholder="Pesquisar nome do aluno..."
                onChange={ev => setFind(ev.target.value)}
            />
            <CreateStudent find={find}/>
            <Students find={find}/>
        </Container>
    </>
}

export default Home

export const getServerSideProps = getServerSidePropsAuth