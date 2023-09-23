import { IStudent } from '../../../types'
import { FC } from 'react'
import api from '../../../services/api'
import Head from 'next/head'
import { Container, Title, ButtonRating } from '../../../styles/pages/students/student'
import ButtonBack from '../../../components/ButtonBack'
import FormEditStudent from '../../../components/FormEditStudent'
import { GetServerSideProps } from 'next'
import { jwtVerify } from 'jose'
import nookies from 'nookies'

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
            <ButtonBack/>
            {student && <>
                <Title>{student.name}</Title>
                <FormEditStudent student={student}/>
                <ButtonRating href={`/students/${student._id}/ratings`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                        <path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"/>
                    </svg>
                    <span>Avaliar</span>
                </ButtonRating>
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