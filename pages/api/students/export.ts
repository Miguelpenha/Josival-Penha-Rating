import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../services/connectDB'
import { IStudent } from '../../../types'
import studentsModels from '../../../models/student'
import generateSpreadsheet from '../../../services/generateSpreadsheet'
import exportSpreadsheet from '../../../services/exportSpreadsheet'

async function exportRatings(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        await connectDB()

        const students: IStudent[] = await studentsModels.find().select('+ratings')

        const spreadsheet = generateSpreadsheet(students)

        await exportSpreadsheet(res, spreadsheet)
    } else {
        res.status(404)
    }
}

export default exportRatings