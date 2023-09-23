import { IStudent } from '../../types'
import { KeyedMutator } from 'swr'
import { useRouter } from 'next/router'
import { FormEvent } from 'react'
import { toast } from 'react-toastify'
import apiBase from '../../services/api/base'
import { DateTime } from 'luxon'

function useHandleSubmit(date: string, student: IStudent, mutate: KeyedMutator<IStudent>) {
    const router = useRouter()

    async function handleSubmit(ev: FormEvent) {
        ev.preventDefault()
    
        let isExists = false
        const dateRaw = DateTime.fromSQL(date).setLocale('pt-br')
        const dateFormatted = dateRaw.toLocaleString()

        if (dateRaw.isValid) {
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

                await mutate()
    
                router.back()
            } else {
                toast('Já existe uma avaliação com essa data', {
                    type: 'error'
                })
            }
        } else {
            toast('Data inválida', {
                type: 'error'
            })
        }
    }

    return handleSubmit
}

export default useHandleSubmit