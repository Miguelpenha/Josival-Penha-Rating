import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../../services/connectDB'
import studentsModels from '../../../../models/student'

interface IQuery {
    id: string
    fields?: string
}

async function getStudent(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        await connectDB()

        const { id, fields: fieldsRaw } = req.query as unknown as IQuery
        let fields: string[] = []

        if (fieldsRaw) {
            fieldsRaw.split(',').map(fieldRaw => {
                fields.push(`+${fieldRaw}`)
            })
        }

        const student = await studentsModels.findById(id).select(fields)

        res.json(student)
    } else {
        res.status(404)
    }
}

export default getStudent