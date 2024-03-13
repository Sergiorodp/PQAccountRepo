/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type Request, type Response } from 'express'
import { type IResponseBusiness } from '@app/models/PQResponseBusinessModel'
import { type TPQLogIn, LogInSchema } from '@app/models/PQAuthModel'
import { getPQUserByEmailRepoV1 } from '@app/dataBase/PQUserRepository'
import envs from '@app/config/envVars'
import argon from 'argon2'
import jwt, { type SignOptions } from 'jsonwebtoken'
import { type PQUserRepoResponse } from '@app/models/PQUserModel'

// #region GET PUC BY CODE
async function userLoginBusinessV1 (req: Request): Promise<IResponseBusiness<object>> {
  let canContinue = true
  let errorHandler: Error | null = null
  let response: IResponseBusiness<object> = {
    message: '',
    success: false,
    detail: [{}]
  }
  let userInfo: TPQLogIn | null = null
  let getUserDBResponse: PQUserRepoResponse | null = null
  let checkPassword: boolean = false

  // #region IN AUDIT
  // #endregion

  // #region DATA CHECK
  if (canContinue) {
    const userParse = LogInSchema.safeParse(req.body)
    if (userParse.success) {
      userInfo = userParse.data
    } else {
      canContinue = false
    }
  }
  // #endregion

  // #region QUERY USER
  if (canContinue) {
    try {
      getUserDBResponse = await getPQUserByEmailRepoV1(userInfo?.email ?? '')
    } catch (e) {
      canContinue = false
      errorHandler = e as Error
    }
  }
  // #endregion

  // #region VERIFY PASSWORD
  if (canContinue) {
    try {
      if (getUserDBResponse?.password && userInfo?.password) {
        checkPassword = await argon.verify(getUserDBResponse?.password, userInfo?.password)
      } else {
        canContinue = false
        // TODO handle error
      }
    } catch (e) {
      canContinue = false
      // TODO handle error
    }
  }
  // #endregion

  // #region GENERATE JWT
  if (canContinue && checkPassword) {
    try {
      const currentDate = new Date()
      const creationDate = Math.floor(currentDate.getTime() / 1000)
      const expirationDate = Math.floor(currentDate.setHours(currentDate.getHours() + 10) / 1000)
      const options: SignOptions = {
        algorithm: 'HS256',
        expiresIn: '10h'
      }
      const payload = {
        userName: getUserDBResponse?.userName,
        name: getUserDBResponse?.name,
        email: getUserDBResponse?.email,
        createToken: creationDate,
        expireToken: expirationDate
      }
      if (envs.JWT_KEY != null) {
        jwt.sign(payload, envs.JWT_KEY, options)
      } else {
        canContinue = false
        // TODO handle no JWT_KEY error
      }
    } catch {
      canContinue = false
      // TODO handle error cant sign token
    }
  }
  // #endregion

  // #region RESPONSE
  if (canContinue) {
    response.success = canContinue
    if (getUserDBResponse) {
      response = {
        ...response,
        detail: [getUserDBResponse]
      }
    } else {
      response = {
        ...response,
        message: 'No user created, DB problem'
      }
    }
  } else {
    response.success = canContinue
    response.message = errorHandler?.toString() ?? 'Unknown Error'
  }

  return response
  // #endregion
}
// #endregion

// #region healthCheck
function healthCheck (_: Request, res: Response): void {
  res.send({
    responde: 'PUC API IS WORKING'
  })
}
// #endregion

export default {
  healthCheck,
  userLoginBusinessV1
}
