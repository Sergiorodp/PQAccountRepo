import { Router, type Request, type Response } from 'express'
import { createUserBusinessV1 } from '@app/business/PQUsersBusiness'
import { HTTPCODES } from '@app/utils/httpCodes'
import { type IResponseBusiness } from '@app/models/PQResponseBusinessModel'

const usersRouter = Router()

console.log('[[ USERS ]]')

function createUserControllerV1 (req: Request, res: Response): void {
  // #region AUDIT
  // TODO
  // #endregion

  if (req.body) {
    createUserBusinessV1(req)
      .then((userInfo: IResponseBusiness) => {
        if (userInfo.success) {
          res.status(HTTPCODES.CREATED).send(userInfo)
        } else {
          res.status(HTTPCODES.BAD_REQUEST).send(userInfo)
        }
      })
      .catch(() => {
        res.status(HTTPCODES.SERVER_ERROR).send({
          message: 'server error',
          success: false
        })
      })
  } else {
    res.status(HTTPCODES.BAD_REQUEST).send({
      value: 'transacción no procesada, no se encontro el body'
    })
  }

  // #region AUDITORIA DE SALIDA
  // TODO
  // #endregion
}

usersRouter.get('/get/v1')
usersRouter.post('/create/v1', createUserControllerV1)

export default usersRouter
