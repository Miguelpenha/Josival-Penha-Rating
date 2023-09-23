import IQuestion from './question'

interface IRating {
    _id: string
    date: string
    questions: IQuestion[]
    created: {
        date: string
        hour: string
        system: Date
    }
}

export default IRating