import { IStudent } from '../../types'
import api from '../../services/api'
import { FC } from 'react'
import Head from 'next/head'
import { Container, Title } from '../../styles/pages/students/create'
import FormCreateStudent from '../../components/FormCreateStudent'
import { GetServerSideProps } from 'next'
import nookies from 'nookies'
import { jwtVerify } from 'jose'

interface IProps {
    name: string | null
}

const Create: FC<IProps> = ({ name }) => {
    const { data: students } = api.get<IStudent[]>('/students')

    return <>
        <Head>
            <title>Cadastro - Josival Penha</title>
        </Head>
        <Container>
            <Title>Cadastrar aluno</Title>
            {students && (
                <FormCreateStudent nameDefault={name} students={students}/>
            )}
        </Container>
    </>
}

export const getServerSideProps: GetServerSideProps<IProps | object> = async (req) => {
    const { [process.env.NEXT_PUBLIC_LOGIN_COOKIE_NAME]:isLogged } = nookies.get(req)

    try {
        if (await jwtVerify(isLogged, new TextEncoder().encode(process.env.SECRET_JWT))) {
            const name = req.query.name as unknown as string

            return { props: { name: name || null } }
        } else {
            return {
                redirect: {
                    permanent: false,
                    destination: '/login'
                }
            }
        }
    } catch {
        return {
            redirect: {
                permanent: false,
                destination: '/login'
            }
        }
    }
}

export default Create