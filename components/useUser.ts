import nookies from 'nookies'
import api from '../services/api'
import { IUser } from '../types'

function useUser() {
    const { [process.env.NEXT_PUBLIC_LOGIN_COOKIE_NAME]:isLogged } = nookies.get()
    const { data: user } = api.get<IUser>('/auth/user', {
        params: {
            token: isLogged
        }
    })

    return user
}

export default useUser