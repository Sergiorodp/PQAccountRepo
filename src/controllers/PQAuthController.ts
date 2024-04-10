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
          res.status(HTTPCODES.ACCEPTED).send(businessRes)
        } else {
          res.status(HTTPCODES.BAD_REQUEST).send(businessRes)
        }
      })
      .catch(e => {
        res.status(HTTPCODES.SERVER_ERROR).send({
          message: e.toString(),
          success: false
        })
      })
  } else {
    res.status(HTTPCODES.BAD_REQUEST).send('No body found')
  }
  // #region AUDITORIA DE SALIDA
  // TODO
  // #endregion
}

router.get('/health', authBusiness.healthCheck)
router.post('/logIn/v1', userLoginControllerV1)

export default router
