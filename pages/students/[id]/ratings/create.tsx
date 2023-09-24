import { FC } from 'react'
import Head from 'next/head'
import { Container, Title } from '../../../../styles/pages/students/ratings/create'
import ButtonBack from '../../../../components/ButtonBack'
import FormCreateRating from '../../../../components/FormCreateRating'
import { GetServerSideProps } from 'next'
import { jwtVerify } from 'jose'
import nookies from 'nookies'

interface IProps {
    id: string
}

const CreateRating: FC<IProps> = ({ id }) => {
    return <>
        <Head>
            <title>Cadastrar avaliação - Josival Penha</title>
        </Head>
        <Container>
            <ButtonBack/>
            <Title>Cadastrar avaliação</Title>
            <FormCreateRating id={id}/>
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

export default CreateRating