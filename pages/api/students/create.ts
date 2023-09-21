import type { IStudent } from '../../../types'
import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../services/connectDB'
import studentsModels from '../../../models/student'

type IBody = Omit<IStudent, 'created' | '_id'>

async function createStudent(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        await connectDB()

        const { name } = req.body as IBody

        if (name) {
            await studentsModels.create({
                name
            } as IStudent)

            res.json({ created: true })
        } else {
            res.json({ message: 'Name is required' })
        }
    } else {
        res.status(404)
    }
}

export default createStudent