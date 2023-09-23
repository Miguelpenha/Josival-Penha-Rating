import { IStudent } from '../../types'
import { KeyedMutator } from 'swr'
import { useRouter } from 'next/router'
import { FormEvent } from 'react'
import { toast } from 'react-toastify'
import apiBase from '../../services/api/base'

function useHandleSubmit(name: string, students: IStudent[], mutate: KeyedMutator<IStudent>) {
    const router = useRouter()

    async function handleSubmit(ev: FormEvent) {
        ev.preventDefault()
    
        if (name.length >= 1) {
            let isExists = false

            students.map(student => {
                if (student.name.trim().toUpperCase() === name.trim().toUpperCase()) {
                    isExists = true
                }
            })

            if (!isExists) {
                toast('Aluno cadastrado', {
                    type: 'success'
                })

                await apiBase.post('/students/create', {
                    name
                })

                await mutate()

                router.push('/')
            } else {
                toast('Já existe um aluno com esse nome', {
                    type: 'error'
                })
            }
        } else {
            toast('Nome não informado', {
                type: 'error'
            })
        }
    }

    return handleSubmit
}

export default useHandleSubmit