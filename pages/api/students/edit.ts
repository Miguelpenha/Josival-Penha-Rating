import type { IStudent } from '../../../types'
import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../services/connectDB'
import studentsModels from '../../../models/student'

type IBody = Omit<IStudent, 'created'>

async function editStudent(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        await connectDB()

        const { name, _id } = req.body as IBody

        if (name && _id) {
            await studentsModels.updateOne({ _id }, {
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