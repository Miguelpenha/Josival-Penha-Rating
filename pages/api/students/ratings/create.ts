import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../../services/connectDB'
import studentsModels from '../../../../models/student'
import { IRating } from '../../../../types'

interface IBody {
    id: string
    rating: IRating
}

async function createRatingStudent(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        await connectDB()

        const { id, rating } = req.body as IBody

        if (rating) {
            const student = await studentsModels.findById(id).select(['ratings'])

            student.ratings.push(rating)

            await student.save()

            res.json({ created: true })
        } else {
            res.json({ message: 'Rating is required' })
        }
    } else {
        res.status(404)
    }
}

export default createRatingStudent