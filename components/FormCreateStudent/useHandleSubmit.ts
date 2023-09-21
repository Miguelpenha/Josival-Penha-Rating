import { FormEvent } from 'react'
import { toast } from 'react-toastify'

function useHandleSubmit(name: string) {
    async function handleSubmit(ev: FormEvent) {
        ev.preventDefault()
    
        if (name.length >= 1) {
            toast('Aluno cadastrado', {
                type: 'success'
            })
        } else {
            toast('Nome não informado', {
                type: 'error'
            })
        }
    }

    return handleSubmit
}

export default useHandleSubmit