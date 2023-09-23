import { DateTime } from 'luxon'

const createdSchema = {
    system: {
        type: Date,
        default: () => DateTime.now().setLocale('pt-br').toISO()
    },
    date: {
        type: String,
        default: () => DateTime.now().setLocale('pt-br').toLocaleString()
    },
    hour: {
        type: String,
        default: () => DateTime.now().setLocale('pt-br').toLocaleString({
            hour: '2-digit',
            minute: '2-digit'
        })
    }
}

export default createdSchema