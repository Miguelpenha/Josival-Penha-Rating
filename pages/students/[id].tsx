import { IStudent } from '../../types'
import { FC } from 'react'
import api from '../../services/api'
import Head from 'next/head'
import { Container, Title } from '../../styles/pages/students/student'
import { GetServerSideProps } from 'next'
import { jwtVerify } from 'jose'
import nookies from 'nookies'
import FormEditStudent from '../../components/FormEditStudent'

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
                <FormEditStudent student={student}/>
            </>}
        </Container>
    </>
}

export const getServerSideProps: GetServerSideProps<IProps | object> = async (req) => {
    const { [process.env.NEXT_PUBLIC_LOGIN_COOKIE_NAME]:isLogged } = nookies.get(req)

    try {
        if (await jwtVerify(isLogged, new TextEncoder().encode(process.env.SECRET_JWT))) {
            const id = req.query.id

            return { props: { id: id as string } }
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

export default Student