import { IStudent, IRating } from '../../types'
import IQuestion from '../../types/student/question'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import apiBase from '../../services/api/base'

function useHandleSubmit(student: IStudent, rating: IRating, questions: IQuestion[]) {
    const router = useRouter()

    async function handleSubmit() {
        toast('Avaliação salva', {
            type: 'success'
        })

        await apiBase.post('/students/ratings/edit', {
            id: student._id,
            rating: {
                _id: rating._id,
                date: rating.date,
                questions: questions.map(question => ({...question, _id: undefined}))
            }
        })

        router.back()
    }

    return handleSubmit
}

export default useHandleSubmit