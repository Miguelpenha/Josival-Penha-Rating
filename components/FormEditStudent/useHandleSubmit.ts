import { IStudent } from '../../types'
import { ScopedMutator } from 'swr/_internal'
import { useRouter } from 'next/router'
import { FormEvent } from 'react'
import { toast } from 'react-toastify'
import apiBase from '../../services/api/base'

function useHandleSubmit(name: string, id: string, students: IStudent[], mutate: ScopedMutator) {
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
                await apiBase.post('/students/edit', {
                    id,
                    name
                })

                mutate('/students')

                toast('Aluno cadastrado', {
                    type: 'success'
                })

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