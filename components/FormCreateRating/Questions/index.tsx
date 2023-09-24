import { Dispatch, FC, SetStateAction } from 'react'
import { Container, ButtonCreate } from './style'
import { v4 } from 'uuid'
import Question from './Question'
import IQuestion from '../../../types/student/question'

interface IProps {
    questions: IQuestion[]
    setQuestions: Dispatch<SetStateAction<IQuestion[]>>
}

const Questions: FC<IProps> = ({ questions, setQuestions }) => {
    return (
        <Container>
            <ButtonCreate title="Criar questão" type="button" onClick={() => {
                setQuestions(questions => ([...questions, { _id: v4(), name: '', response: '' }]))
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                </svg>
            </ButtonCreate>
            {questions.map((question, index) => (
                <Question key={index} question={question} setQuestions={setQuestions}/>
            ))}
        </Container>
    )
}

export default Questions