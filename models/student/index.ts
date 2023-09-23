import mongoose from 'mongoose'
import { IStudent } from '../../types'
import createdSchema from '../schemasPatterns/created'
import ratingSchema from './rating'

const schema = new mongoose.Schema<IStudent>({
    name: String,
    created: createdSchema,
    ratings: {
        select: false,
        type: [ratingSchema]
    }
})

const studentsModels = mongoose.models.students || mongoose.model<IStudent>('students', schema)

export default studentsModels