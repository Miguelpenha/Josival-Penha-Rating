import apiBase from '../../../services/api/base'
import { toast } from 'react-toastify'

function useHandleDelete(id: string, idRating: string) {
    async function handleDelete() {
        await apiBase.delete(`/students/ratings/delete?id=${id}&idRating=${idRating}`)

        toast('Avaliação excluída', {
            type: 'error'
        })
    }

    return handleDelete
}

export default useHandleDelete