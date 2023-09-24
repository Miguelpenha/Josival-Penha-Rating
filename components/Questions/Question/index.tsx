import IQuestion from '../../../types/student/question'
import { FC, useState } from 'react'
import { Container, Name, Response } from './style'

interface IProps {
    question: IQuestion
}

const Question: FC<IProps> = ({ question }) => {
    const [name, setName] = useState(question.name)
    const [response, setResponse] = useState(question.response)

    return (
        <Container>
            <Name
                value={name}
                onChange={ev => setName(ev.target.value)}
                rows={name.match(/\n/g) ? name.match(/\n/g)!.length+1 : 1}
            />
            <Response
                value={response}
                onChange={ev => setResponse(ev.target.value)}
                rows={response.match(/\n/g) ? response.match(/\n/g)!.length+1 : 1}
            />
        </Container>
    )
}

export default Question