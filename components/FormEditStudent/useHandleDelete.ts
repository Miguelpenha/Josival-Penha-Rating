import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import apiBase from '../../services/api/base'

function useHandleDelete(id: string) {
    const router = useRouter()

    async function handleDelete() {
        toast('Aluno excluído', {
            type: 'error'
        })

        await apiBase.delete(`/students/delete?id=${id}`)

        router.push('/')
    }

    return handleDelete
}

export default useHandleDelete