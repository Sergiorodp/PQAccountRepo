import { type Request, type Response, Router } from 'express'
import authBusiness from '@app/business/PQAuthBusiness'
import { HTTPCODES } from '@app/utils/httpCodes'

const router = Router()

console.log('[[ AUTH LOADED ]]')

function userLoginControllerV1 (req: Request, res: Response): void {
  // #region AUDITORIA DE ENTRADA
  // TODO
  // #endregion
  if (req.body) {
    authBusiness.userLoginBusinessV1(req)
      .then(businessRes => {
        if (businessRes.success) {
          res.status(HTTPCODES.accepted).send(businessRes)
        } else {
          res.status(HTTPCODES.badRequest).send(businessRes)
        }
      })
      .catch(e => {
        res.status(HTTPCODES.serverError).send({
          message: e.toString(),
          success: false
        })
      })
  } else {
    res.status(HTTPCODES.badRequest).send('No body found')
  }
  // #region AUDITORIA DE SALIDA
  // TODO
  // #endregion
}

router.get('/health', authBusiness.healthCheck)
router.post('/logIn/v1', userLoginControllerV1)

export default router
