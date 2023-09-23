import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../../services/connectDB'
import studentsModels from '../../../../models/student'

interface IQuery {
    id: string
    idRating: string
}

async function deleteRatingStudent(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'DELETE') {
        await connectDB()

        const { id, idRating } = req.query as unknown as IQuery

        if (idRating) {
            const student = await studentsModels.findById(id).select(['ratings'])

            student.ratings.pull({ _id: idRating })

            await student.save()

            res.json({ deleted: true })
        } else {
            res.json({ message: 'ID rating is required' })
        }
    } else {
        res.status(404)
    }
}

export default deleteRatingStudent