import { UserSchema } from '@app/models/PQUserModel'
import { createNewPQUserRepoV1 } from '@app/dataBase/PQUserRepository'
import envs from '@app/config/envVars'
import { Buffer } from 'node:buffer'
import { type Request } from 'express'
import argon from 'argon2'

// models handler
import { type IResponseBusiness } from '@app/models/PQResponseBusinessModel'

export async function createUserBusinessV1 (req: Request): Promise<IResponseBusiness> {
  let canContinue: boolean = true
  let errorHandler: Error | null = null
  let response: IResponseBusiness = {
    message: '',
    detail: [{}],
    success: true
  }
  let userParse, createdUserResponse

  // #region VALIDATE DATA
  if (canContinue) {
    userParse = UserSchema.safeParse(req.body)
    if (!userParse.success) {
      canContinue = false
      errorHandler = userParse.error
    }
  }
  // #endregion

  // #region USER DATA
  if (canContinue && userParse?.success) {
    try {
      if (!envs.HASH_KEY) {
        throw new Error('')
      }
      const pswd = await argon.hash(userParse.data.password ?? '', { secret: Buffer.from(envs.HASH_KEY) })
      userParse.data = {
        ...userParse.data,
        password: pswd
      }
    } catch {
      canContinue = false
      errorHandler = new Error('HASH_KEY not found')
    }
  } else {
    canContinue = false
  }
  // #endregion

  // #region CREATE USER
  if (canContinue && userParse?.success) {
    try {
      createdUserResponse = await createNewPQUserRepoV1(userParse.data)
    } catch (e) {
      canContinue = false
      errorHandler = e as Error
    }
  }
  // #endregion

  // #region RESPONSE
  if (canContinue) {
    response.success = canContinue
    if (createdUserResponse) {
      response = {
        ...response,
        detail: [createdUserResponse]
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
