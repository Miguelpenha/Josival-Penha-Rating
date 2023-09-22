import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../services/connectDB'
import studentsModels from '../../../models/student'

interface IQuery {
    id: string
}

async function deleteStudent(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'DELETE') {
        await connectDB()

        const { id } = req.query as any as IQuery

        await studentsModels.deleteOne({ _id: id })

        res.json({ deleted: true })
    } else {
        res.status(404)
    }
}

export default deleteStudent