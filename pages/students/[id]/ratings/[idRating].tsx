import { FC } from 'react'
import useRating from '../../../../components/useRating'
import Head from 'next/head'
import { Container, Title } from '../../../../styles/pages/students/ratings'
import ButtonBack from '../../../../components/ButtonBack'
import { GetServerSideProps } from 'next'
import { jwtVerify } from 'jose'
import nookies from 'nookies'

interface IProps {
    id: string
    idRating: string
}

const Rating: FC<IProps> = ({ id, idRating }) => {
    const rating = useRating(id, idRating)

    return <>
        <Head>
            <title>Aluno - Josival Penha</title>
        </Head>
        <Container>
            <ButtonBack/>
            {rating && <>
                <Title>{rating.date}</Title>
                {rating.questions.map(question => <>
                    <span>{question.name}</span>
                    <span>{`> ${question.response}`}</span>
                </>)}
            </>}
        </Container>
    </>
}

export const getServerSideProps: GetServerSideProps<IProps | object> = async (req) => {
    const { [process.env.NEXT_PUBLIC_LOGIN_COOKIE_NAME]:isLogged } = nookies.get(req)

    try {
        if (await jwtVerify(isLogged, new TextEncoder().encode(process.env.SECRET_JWT))) {
            const { id, idRating } = req.query

            return { props: { id: id as string, idRating: idRating as string } }
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

export default Rating