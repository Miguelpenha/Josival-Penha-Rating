import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../services/connectDB'
import studentsModels from '../../../models/student'

interface IQuery {
    student: string
}

async function deleteStudent(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'DELETE') {
        await connectDB()

        const { student } = req.query as any as IQuery

        await studentsModels.deleteOne({ _id: student })

        res.json({ deleted: true })
    } else {
        res.status(404)
    }
}

export default deleteStudent