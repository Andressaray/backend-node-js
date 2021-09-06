import { Request, Response } from 'express'

import { success, error } from '../response'
import { IUser } from '../interfaces/user/user.create'

export const register = (req: Request, res: Response) => {
    const dataUser : IUser = {
        id: 12345,
        name: 'Andres'
    }
    success({
        res,
        body: dataUser
    })   
}