import type { IStudent } from '../../../types'
import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../services/connectDB'
import studentsModels from '../../../models/student'

interface IBody extends Omit<IStudent, 'created' | '_id'> {
    id: string
}

async function editStudent(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        await connectDB()

        const { name, id } = req.body as IBody

        if (name && id) {
            await studentsModels.updateOne({ _id: id }, {
                name
            } as IStudent)

            res.json({ edited: true })
        } else {
            res.json({ message: 'Name and ID is required' })
        }
    } else {
        res.status(404)
    }
}

export default editStudent