import { IStudent } from '../../types'
import { useRouter } from 'next/router'
import { FormEvent } from 'react'
import { toast } from 'react-toastify'
import apiBase from '../../services/api/base'
import { DateTime } from 'luxon'

function useHandleSubmit(date: string, student: IStudent) {
    const router = useRouter()

    async function handleSubmit(ev: FormEvent) {
        ev.preventDefault()
    
        let isExists = false
        const dateFormatted = DateTime.fromFormat(date.replace(/-/g, ' '), 'yyyy MM dd').setLocale('pt-br').toLocaleString()

        student.ratings.map(rating => {
            if (rating.date === dateFormatted) {
                isExists = true
            }
        })

        if (!isExists) {
            toast('Avaliação cadastrada', {
                type: 'success'
            })

            await apiBase.post('/students/ratings/create', {
                id: student._id,
                rating: {
                    date: dateFormatted,
                    questions: [{
                        name: 'asd',
                        response: '10'
                    }]
                }
            })

            router.push('/')
        } else {
            toast('Já existe uma avaliação com essa data', {
                type: 'error'
            })
        }
    }

    return handleSubmit
}

export default useHandleSubmit