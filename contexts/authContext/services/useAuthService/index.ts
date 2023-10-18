import { Dispatch, SetStateAction } from 'react'
import useLogout from './useLogout'

function useAuthService(setIsLogged: Dispatch<SetStateAction<boolean>>) {
    const logout = useLogout(setIsLogged)

    return {
        logout
    }
}

export default useAuthService