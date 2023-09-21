import mongoose from 'mongoose'
import { IStudent } from '../types'
import createdSchema from './schemasPatterns/created'

const schema = new mongoose.Schema<IStudent>({
    name: String,
    created: createdSchema
})

const studentsModels = mongoose.models.students || mongoose.model<IStudent>('students', schema)

export default studentsModels