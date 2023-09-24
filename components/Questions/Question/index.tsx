import IQuestion from '../../../types/student/question'
import { Dispatch, SetStateAction, FC, useState } from 'react'
import { Container, Name, Response } from './style'

interface IProps {
    question: IQuestion
    setQuestions: Dispatch<SetStateAction<IQuestion[]>>
}

const Question: FC<IProps> = ({ question, setQuestions }) => {
    return (
        <Container>
            <Name
                value={question.name}
                rows={question.name.match(/\n/g) ? question.name.match(/\n/g)!.length+1 : 1}
                onChange={ev => (
                    setQuestions(questions => questions.map(questionMap => question._id===questionMap._id ? {...question, name: ev.target.value} : questionMap))
                )}
            />
            <Response
                value={question.response}
                rows={question.response.match(/\n/g) ? question.response.match(/\n/g)!.length+1 : 1}
                onChange={ev => (
                    setQuestions(questions => questions.map(questionMap => question._id===questionMap._id ? {...question, response: ev.target.value} : questionMap))
                )}
            />
        </Container>
    )
}

export default Question