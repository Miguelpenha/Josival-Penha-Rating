import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../services/connectDB'
import { IStudent } from '../../../types'
import studentsModels from '../../../models/student'

async function students(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        await connectDB()

        const students: IStudent[] = await studentsModels.find()

        res.json(students)
    } else {
        res.status(404)
    }
}

export default students