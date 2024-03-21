/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type Request, type Response } from 'express'
import { type IResponseBusiness } from '@app/models/PQResponseBusinessModel'
import { type TPQLogIn, LogInSchema } from '@app/models/PQAuthModel'
import { getPQUserByEmailRepoV1 } from '@app/dataBase/PQUserRepository'
import envs from '@app/config/envVars'
import argon from 'argon2'
import jwt, { type SignOptions } from 'jsonwebtoken'
import { argonOptions } from '@app/utils/auth'
import { type PQUserRepoResponse } from '@app/models/PQUserModel'

// #region GET PUC BY CODE
async function userLoginBusinessV1 (req: Request): Promise<IResponseBusiness> {
  let canContinue = true
  let errorHandler: Error | null = null
  let response: IResponseBusiness = {
    message: '',
    success: false,
    detail: [{}]
  }
  let userInfo: TPQLogIn | null = null
  let getUserDBResponse: PQUserRepoResponse | null = null
  let checkPassword: boolean = false
  let generateToken: string = ''

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
        checkPassword = await argon.verify(getUserDBResponse?.password, userInfo?.password, argonOptions)
      } else {
        canContinue = false
        errorHandler = new Error('user no exist')
        // TODO handle error
      }
    } catch (e) {
      canContinue = false
      errorHandler = e as Error
      // TODO handle error
    }
  }
  // #endregion

  // #region GENERATE JWT
  if (canContinue) {
    if (checkPassword) {
      try {
        const options: SignOptions = {
          algorithm: 'HS256',
          expiresIn: '10h'
        }
        const payload = {
          userName: getUserDBResponse?.userName,
          name: getUserDBResponse?.name,
          email: getUserDBResponse?.email,
          role: getUserDBResponse?.role
        }
        if (envs.JWT_KEY != null) {
          generateToken = jwt.sign(payload, envs.JWT_KEY, options)
        } else {
          canContinue = false
          errorHandler = new Error(envs.JWT_KEY)
          // TODO handle no JWT_KEY error
        }
      } catch (e) {
        canContinue = false
        errorHandler = e as Error
        // TODO handle error cant sign token
      }
    } else {
      canContinue = false
      errorHandler = new Error('wrong user or password')
    }
  }
  // #endregion

  // #region RESPONSE
  if (canContinue) {
    response.success = canContinue
    if (generateToken) {
      const objectResponse = {
        token: generateToken
      }
      response = {
        ...response,
        detail: [objectResponse]
      }
    } else {
      response = {
        ...response,
        success: false,
        message: errorHandler?.message.toString() ?? 'No token, DB problem'
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
