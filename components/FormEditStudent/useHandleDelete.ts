import { KeyedMutator } from 'swr'
import { IStudent } from '../../types'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import apiBase from '../../services/api/base'

function useHandleDelete(id: string, mutate: KeyedMutator<IStudent[]>) {
    const router = useRouter()

    async function handleDelete() {
        toast('Aluno excluído', {
            type: 'error'
        })

        await apiBase.delete(`/students/delete?id=${id}`)

        await mutate()

        router.push('/')
    }

    return handleDelete
}

export default useHandleDelete