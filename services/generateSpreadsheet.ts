import ExcelJS from 'exceljs'
import { IStudent } from '../types'

function generateSpreadsheet(students: IStudent[]) {
    const spreadsheet = new ExcelJS.Workbook()
    const sheet = spreadsheet.addWorksheet('Avaliações')

    sheet.columns = [
        { header: 'ID Questão', key: 'id' },
        { header: 'ID Avaliação', key: 'id.rating' },
        { header: 'ID Estudante', key: 'id.student' },
        { header: 'Nome da pergunta', key: 'name' },
        { header: 'Resposta da pergunta', key: 'response' }
    ]

    students.map(student => {
        student.ratings.map(rating => {
            rating.questions.map(question => {
                sheet.addRow({
                    name: question.name,
                    response: question.response,
                    id: question._id.toString(),
                    'id.rating': rating._id.toString(),
                    'id.student': student._id.toString(),
                })
            })
        })
    })

    return spreadsheet
}

export default generateSpreadsheet