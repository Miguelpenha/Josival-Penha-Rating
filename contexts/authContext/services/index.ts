import { Dispatch, SetStateAction } from 'react'
import useLoad from './useLoad'
import useAuthService from './useAuthService'

function useService(setIsLogged: Dispatch<SetStateAction<boolean>>) {
    const { logout } = useAuthService(setIsLogged)
    const load = useLoad(setIsLogged, logout)

    return { load, logout }
}

export default useService