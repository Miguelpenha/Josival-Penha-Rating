import mongoose from 'mongoose'
import IQuestion from '../../../types/student/question'

const questionSchema = new mongoose.Schema<IQuestion>({
    name: String,
    response: String
})

export default questionSchema