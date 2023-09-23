import mongoose from 'mongoose'
import { IRating } from '../../../types'
import createdSchema from '../../schemasPatterns/created'
import questionSchema from './question'

const ratingSchema = new mongoose.Schema<IRating>({
    date: String,
    created: createdSchema,
    questions: [questionSchema]
})

export default ratingSchema