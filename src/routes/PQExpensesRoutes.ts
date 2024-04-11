import { Router } from 'express'
import { authorization } from '@app/middlewares/auth/PQAuthenticationJWT'

const PQExpensesRouter = Router()

/**
 * @openapi
 * /api/getById/v1:
 *      get:
 *          tags:
 *              - Expenses
 */
PQExpensesRouter.get('getById/v1', authorization, () => {})
PQExpensesRouter.get('getAll/v1', authorization, () => {})

export default PQExpensesRouter
