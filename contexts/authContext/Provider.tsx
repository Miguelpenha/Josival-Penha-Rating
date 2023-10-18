import { FC, useState, useEffect } from 'react'
import useService from './services'
import IAuthContext from './type'
import TypesContext from './Context'
import login from './login'

interface Iprops {
    children: any
}

const AuthProvider: FC<Iprops> = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false)
    const { load, logout } = useService(setIsLogged)

    useEffect(() => {
        load().then()
    }, [])

    const value: IAuthContext = {
        login: async (jwt: string) => {
            const { authenticated } = await login(jwt, setIsLogged)

            return { authenticated }
        },
        logout,
        isLogged
    }
    
    return (
        <TypesContext.Provider value={value}>
           {children}
        </TypesContext.Provider>
    )
}

export default AuthProvider