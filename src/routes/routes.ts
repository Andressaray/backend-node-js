import { Router } from 'express'

import { register } from '../controllers/user.controller'

export const routes = (router: Router) => {
    router.get('/api/user', register)
}