import type { NextApiRequest, NextApiResponse } from 'next'
import { jwtVerify, decodeJwt } from 'jose'
import { decrypt } from '../../../utils/cryptography'
import { IUser } from '../../../types'

type IData = {
    valid: boolean
} | IUser

interface IBody {
    token: string
}

async function userAuth(req: NextApiRequest, res: NextApiResponse<IData>) {
    if (req.method === 'GET') {
        const { token } = req.query as unknown as IBody

        try {
            if (await jwtVerify(token, new TextEncoder().encode(process.env.SECRET_JWT))) {
                const userEncrypted = decodeJwt(token)
                const user: IUser = JSON.parse(decrypt(userEncrypted.sub as string))

                return res.json(user)
            } else {
                res.json({ valid: false })
            }
        } catch {
            res.json({ valid: false })
        }
    } else {
        res.status(404)
    }
}

export default userAuth