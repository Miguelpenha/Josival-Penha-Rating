import { IStudent } from '../../types'
import { FC } from 'react'
import Head from 'next/head'
import { Container, Title } from '../../styles/pages/students/student'
import { GetServerSideProps } from 'next'
import students from '../../services/students'

interface IProps {
    student: IStudent
}

const Student: FC<IProps> = ({ student }) => {
    return <>
        <Head>
            <title>Aluno - Josival Penha</title>
        </Head>
        <Container>
            <Title>{student.name}</Title>
        </Container>
    </>
}

export const getServerSideProps: GetServerSideProps<IProps> = async (req) => {
    const id = req.query.id
    let student = null

    students.map(studentMap => {
        if (studentMap.id === id) {
            student = studentMap
        }
    })

    return { props: { student: student as unknown as IStudent } }
}

export default Student