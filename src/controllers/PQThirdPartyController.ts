import { type Request, type Response } from 'express'
import { HTTPCODES } from '@app/utils/httpCodes'
import PQThirdPartyPersonBusiness from '@app/business/PQThirdPartyPersonBusiness'

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
    PQThirdPartyPersonBusiness.getThirdPartyPersonBusinessByIdNumV1(req)
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

function getThirdPartyPersonControllerByUserIdV1 (req: Request, res: Response): void {
  // #region AUDITORIA DE ENTRADA
  // TODO
  // #endregion
  if (req.body) {
    PQThirdPartyPersonBusiness.getThirdPartyPersonBusinessByUserIdV1(req)
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

export default {
  createThirdPartyPersonControllerV1,
  getThirdPartyPersonControllerByIdNumV1,
  getThirdPartyPersonControllerByUserIdV1
}
