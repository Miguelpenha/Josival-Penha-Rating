import { toast } from 'react-toastify'
import useAuth from '../contexts/authContext'
import { useRouter } from 'next/router'

function useHandleLogout() {
    const { logout } = useAuth()
    const router = useRouter()

    async function handleLogout() {
        logout()

        toast('Logout feito!', {
            type: 'error'
        })

        await router.replace('/')
    }

    return handleLogout
}

export default useHandleLogout