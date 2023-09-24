import { FC, useState } from 'react'
import { Container } from './style'
import Button from '../Button'
import Question from './Question'
import { v4 } from 'uuid'
import useHandleSubmit from './handleSubmit'
import { IRating, IStudent } from '../../types'

interface IProps {
    student: IStudent
    rating: IRating
}

const Questions: FC<IProps> = ({ rating, student }) => {
    const [questions, setQuestions] = useState(rating.questions)
    const handleSubmit = useHandleSubmit(student, rating, questions)

    return (
        <Container>
            <Button title="Adicionar" onClick={() => (
                setQuestions(questions => [...questions, { _id: v4(), name: '', response: '' }])
            )}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                </svg>
            </Button>
            {questions.map((question, index) => (
                <Question key={index} question={question} setQuestions={setQuestions}/>
            ))}
            <Button title="Salvar" onClick={handleSubmit}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/>
                </svg>
            </Button>
        </Container>
    )
}

export default Questions