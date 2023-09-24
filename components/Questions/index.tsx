import IQuestion from '../../types/student/question'
import { FC } from 'react'
import { Container } from './style'
import Question from './Question'

interface IProps {
    questions: IQuestion[]
}

const Questions: FC<IProps> = ({ questions }) => {
    return (
        <Container>
            {questions.map((question, index) => (
                <Question key={index} question={question}/>
            ))}
        </Container>
    )
}

export default Questions