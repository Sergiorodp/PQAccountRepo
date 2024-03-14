import { Router, type Request, type Response } from 'express'
import { HTTPCODES } from '@app/utils/httpCodes'
import { createThirdPartyPersonBusinessV1 } from '@app/business/PQThirdPartyPersonBusiness'

const thirdPartiesRouter = Router()

console.log('[[ THIRD PARTIES LOADED ]]')

function createThirdPartiePersonControllerv1 (req: Request, res: Response): void {
  // #region AUDITORIA DE ENTRADA
  // TODO
  // #endregion
  if (req.body) {
    createThirdPartyPersonBusinessV1(req)
      .then(createResponse => {
        if (createResponse.success) {
          res.status(HTTPCODES.accepted).send(createResponse)
        } else {
          res.status(HTTPCODES.badRequest).send(createResponse)
        }
      })
      .catch(() => {
        res.status(HTTPCODES.serverError).send({
          message: 'server error',
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

thirdPartiesRouter.post('/create/v1', createThirdPartiePersonControllerv1)

export default thirdPartiesRouter
