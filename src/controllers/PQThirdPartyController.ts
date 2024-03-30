import { Router, type Request, type Response } from 'express'
import { HTTPCODES } from '@app/utils/httpCodes'
import PQThirdPartyPersonBusiness from '@app/business/PQThirdPartyPersonBusiness'
import { authorization } from '@app/middelwares/auth/PQAuthenticationJWT'

const thirdPartiesRouter = Router()

console.log('[[ THIRD PARTIES LOADED ]]')

function createThirdPartyPersonControllerV1 (req: Request, res: Response): void {
  // #region AUDITORIA DE ENTRADA
  // TODO
  // #endregion
  if (req.body) {
    PQThirdPartyPersonBusiness.createThirdPartyPersonBusinessV1(req)
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

function getThirdPartyPersonControllerByIdNumV1 (req: Request, res: Response): void {
  // #region AUDITORIA DE ENTRADA
  // TODO
  // #endregion
  if (req.body) {
    PQThirdPartyPersonBusiness.getThirdPartyPersonBusinessV1(req)
      .then(response => {
        if (response.success) {
          res.status(HTTPCODES.accepted).send(response)
        } else {
          res.status(HTTPCODES.badRequest).send(response)
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

thirdPartiesRouter.post('/create/v1', authorization, createThirdPartyPersonControllerV1)
thirdPartiesRouter.get('/getByNum/v1', authorization, getThirdPartyPersonControllerByIdNumV1)

export default thirdPartiesRouter
