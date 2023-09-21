import type { NextApiRequest, NextApiResponse } from 'next'
import { SignJWT } from 'jose'

interface IData {
    token?: string
    valid: boolean
}

async function login(req: NextApiRequest, res: NextApiResponse<IData>) {
    if (req.method === 'POST') {
        const token = await new SignJWT({})
        .setSubject('true')
        .setExpirationTime('100y')
        .setProtectedHeader({ alg: 'HS256' })
        .sign(new TextEncoder().encode(process.env.SECRET_JWT))

        res.json({ valid: true, token })
    } else {
        res.status(404)
    }
}

export default login