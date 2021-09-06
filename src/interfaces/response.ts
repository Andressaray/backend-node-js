import { Response } from 'express'
interface response {
    res: Response,
    status?: number,
    text?: string,
    body?: [] | {}
}

export {
    response
}