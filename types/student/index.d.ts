import IRating from './rating'

interface IStudent {
    _id: string
    name: string
    ratings: IRating[]
    created: {
        date: string
        hour: string
        system: Date
    }
}

export default IStudent