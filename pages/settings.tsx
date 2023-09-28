import Head from 'next/head'
import { Container, Title } from '../styles/pages/settings'
import ButtonBack from '../components/ButtonBack'
import getServerSidePropsAuth from '../utils/getServerSidePropsAuth'

function Home() {
    return <>
        <Head>
            <title>Configurações - Josival Penha</title>
        </Head>
        <Container>
            <ButtonBack/>
            <Title>Configurações</Title>
        </Container>
    </>
}

export default Home

export const getServerSideProps = getServerSidePropsAuth