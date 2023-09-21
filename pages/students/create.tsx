import { FC } from 'react'
import Head from 'next/head'
import { Container, Title } from '../../styles/pages/students/create'
import FormCreateStudent from '../../components/FormCreateStudent'
import { GetServerSideProps } from 'next'

interface IProps {
    name: string | null
}

const Create: FC<IProps> = ({ name }) => {
    return <>
        <Head>
            <title>Cadastro - Josival Penha</title>
        </Head>
        <Container>
            <Title>Cadastrar aluno</Title>
            <FormCreateStudent nameDefault={name}/>
        </Container>
    </>
}

export const getServerSideProps: GetServerSideProps<IProps> = async (req) => {
    const name = req.query.name as unknown as string

    return { props: { name: name || null } }
}

export default Create