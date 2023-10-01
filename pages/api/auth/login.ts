import type { NextApiRequest, NextApiResponse } from 'next'
import { SignJWT, decodeJwt } from 'jose'
import { IUser } from '../../../types'
import { encrypt } from '../../../utils/cryptography'

interface IData {
    token?: string
    valid: boolean
}

interface IBody {
    jwt: string
}

async function login(req: NextApiRequest, res: NextApiResponse<IData>) {
    if (req.method === 'POST') {
        const { jwt } = req.body as IBody
        const user = decodeJwt(jwt)
        const userStringify = JSON.stringify({ user: user.email, given_name: user.given_name } as IUser)

        const token = await new SignJWT({})
        .setSubject(encrypt(userStringify))
        .setExpirationTime('100y')
        .setProtectedHeader({ alg: 'HS256' })
        .sign(new TextEncoder().encode(process.env.SECRET_JWT))

        res.json({ valid: true, token })
    } else {
        res.status(404)
    }
}

export default login