import IQuestion from '../../../../types/student/question'
import { Dispatch, SetStateAction, FC, useRef, useEffect, useState } from 'react'
import { Container, Name, Response } from './style'

interface IProps {
    question: IQuestion
    setQuestions: Dispatch<SetStateAction<IQuestion[]>>
}

const Question: FC<IProps> = ({ question, setQuestions }) => {
    return (
        <Container>
            <Name value={question.name} onChange={ev => {
                setQuestions(questions => questions.map(questionMap => question._id===questionMap._id ? {...question, name: ev.target.value.replace(/\n/g, '')} : questionMap))
            }}/>
            <Response value={question.response} onChange={ev => {
                setQuestions(questions => questions.map(questionMap => question._id===questionMap._id ? {...question, response: ev.target.value.replace(/\n/g, '')} : questionMap))
            }}/>
        </Container>
    )
}

export default Question