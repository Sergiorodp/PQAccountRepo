import { type NextFunction, type Request, type Response } from 'express'
import { verify } from 'jsonwebtoken'
import envs from '@app/config/envVars'

export function authorization (req: Request, res: Response, next: NextFunction): void {
  const token = getToken(req)

  // #region GET JWT SECRET
  if (envs.JWT_SECRE) {
    res.status(500).send({ message: 'Internal Server Error' })
    return
  }
  // #endregion

  // #region TOKEN VALIDATIONS
  if (!token) {
    res.status(401).send({ message: 'Unauthorized' })
    return
  }
  // #endregion

  // #region VERIFY
  verify(token ?? '', envs.JWT_SECRET ?? '', function (err, _) {
    if (err) {
      res.status(401).send({
        message: `${err.name}: ${err.message}`,
        success: false
      })
      return
    }
    next()
  })
  // #endregion
}

function getToken (req: Request): string | undefined {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    return undefined
  }
  const [, token] = authHeader.split(' ')
  return token
}
