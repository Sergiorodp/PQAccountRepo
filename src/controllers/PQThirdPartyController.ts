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
          res.status(HTTPCODES.ACCEPTED).send(createResponse)
        } else {
          res.status(HTTPCODES.BAD_REQUEST).send(createResponse)
        }
      })
      .catch(() => {
        res.status(HTTPCODES.SERVER_ERROR).send({
          message: 'server error',
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

function getThirdPartyPersonControllerByIdNumV1 (req: Request, res: Response): void {
  // #region AUDITORIA DE ENTRADA
  // TODO
  // #endregion
  if (req.body) {
    PQThirdPartyPersonBusiness.getThirdPartyPersonBusinessByIdNumV1(req)
      .then(response => {
        if (response.success) {
          res.status(HTTPCODES.ACCEPTED).send(response)
        } else {
          res.status(HTTPCODES.BAD_REQUEST).send(response)
        }
      })
      .catch(() => {
        res.status(HTTPCODES.SERVER_ERROR).send({
          message: 'server error',
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

function getThirdPartyPersonControllerByUserIdV1 (req: Request, res: Response): void {
  // #region AUDITORIA DE ENTRADA
  // TODO
  // #endregion
  if (req.body) {
    PQThirdPartyPersonBusiness.getThirdPartyPersonBusinessByUserIdV1(req)
      .then(response => {
        if (response.success) {
          res.status(HTTPCODES.ACCEPTED).send(response)
        } else {
          res.status(HTTPCODES.BAD_REQUEST).send(response)
        }
      })
      .catch(() => {
        res.status(HTTPCODES.SERVER_ERROR).send({
          message: 'server error',
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

export default {
  createThirdPartyPersonControllerV1,
  getThirdPartyPersonControllerByIdNumV1,
  getThirdPartyPersonControllerByUserIdV1
}
