import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../../services/connectDB'
import studentsModels from '../../../../models/student'
import { IRating } from '../../../../types'

interface IBody {
    id: string
    rating: IRating
}

async function editRatingStudent(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        await connectDB()

        const { id, rating } = req.body as IBody

        if (rating) {
            const student = await studentsModels.findById(id).select(['ratings'])

            student.ratings = await Promise.all(
                student.ratings.map((ratingMap: IRating) => {
                    if (ratingMap._id.toString() === rating._id) {
                        ratingMap = rating as any
                    }

                    return ratingMap
                })
            )

            await student.save()

            res.json({ edited: true })
        } else {
            res.json({ message: 'Ratings is required' })
        }
    } else {
        res.status(404)
    }
}

export default editRatingStudent