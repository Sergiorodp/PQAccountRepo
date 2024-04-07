import { PQThirdPartyPersonSchema } from '@app/models/PQThirdPartyPersonModel'
import PQThirdPartyPersonRepository from '@app/dataBase/PQThirdPartyPersonRepository'
import PQUserRepository from '@app/dataBase/PQUserRepository'

// models
import { type Request } from 'express'
import { type IResponseBusiness } from '@app/models/PQResponseBusinessModel'
import { type IPQRequestBusiness } from '@app/models/PQRequestBusinessModel'
import { type IPQUserResponse } from '@app/models/PQUserModel'

async function createThirdPartyPersonBusinessV1 (req: IPQRequestBusiness): Promise<IResponseBusiness> {
  let canContinue: boolean = true
  let errorHandler: Error | null = null
  let response: IResponseBusiness = {
    message: '',
    success: false,
    detail: [{}]
  }
  let user: IPQUserResponse | null = null
  let thirdPersonParse; let createdThirdPerson = null

  // #region VALIDATE DATA
  if (canContinue) {
    thirdPersonParse = PQThirdPartyPersonSchema.safeParse(req.body)
    if (!thirdPersonParse.success) {
      canContinue = false
      errorHandler = thirdPersonParse.error
    }
  }
  // #endregion

  // #region GET USER
  if (canContinue) {
    try {
      if (req.PQUserInfo?.email) {
        user = await PQUserRepository.getPQUserByEmailRepoV1(req.PQUserInfo?.email, { email: 1 })
      } else {
        errorHandler = new Error('No user email')
        canContinue = false
      }
    } catch (e) {
      // TODO Error handler get user
      canContinue = false
    }
  }
  // #endregion

  // #region CREATE PERSON
  if (canContinue) {
    try {
      if (thirdPersonParse?.success && user?._id) {
        const thirdPersonCreateRequest = { ...thirdPersonParse?.data, userId: user?._id }
        createdThirdPerson = await PQThirdPartyPersonRepository.createPQThirdPartyPersonRepo(thirdPersonCreateRequest)
      }
    } catch {
      canContinue = false
      // TODO error handler
    }
  }
  // #endregion

  // #region RESPONSE
  if (canContinue) {
    response.success = canContinue
    if (createdThirdPerson) {
      response = {
        ...response,
        detail: [createdThirdPerson]
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

async function getThirdPartyPersonBusinessByIdNumV1 (req: Request): Promise<IResponseBusiness> {
  let canContinue: boolean = true
  let errorHandler: Error | null = null
  let response: IResponseBusiness = {
    message: '',
    success: false,
    detail: [{}]
  }
  let idNum = ''; let ThirdPersonRepoResponse = null

  // #region VALIDATE DATA
  if (canContinue) {
    if (req.body) {
      idNum = req.body.idNum
    } else {
      canContinue = false
      errorHandler = new Error('No ID given')
    }
  }
  // #endregion

  // #region GET THIRD PERSON
  if (canContinue) {
    try {
      ThirdPersonRepoResponse = await PQThirdPartyPersonRepository.getPQThirdPartyPersonByIdNumRepo(idNum)
    } catch (e) {
      errorHandler = e as Error
    }
  }
  // #endregion

  // #region RESPONSE
  if (canContinue) {
    response.success = canContinue
    response = {
      ...response,
      detail: [ThirdPersonRepoResponse ?? {}]
    }
  } else {
    response.success = canContinue
    response.message = errorHandler?.toString() ?? 'Unknown Error'
  }

  return response
  // #endregion
}

async function getThirdPartyPersonBusinessByUserIdV1 (req: IPQRequestBusiness): Promise<IResponseBusiness> {
  let canContinue = true
  let errorHandler: Error | null = null
  let response: IResponseBusiness = {
    message: '',
    success: false,
    detail: [{}]
  }
  let ThirdPersonRepoResponse = null

  // #region VALIDATE DATA
  if (canContinue) {
    if (!req.PQUserInfo?.email) {
      canContinue = false
      errorHandler = new Error('No ID given')
    }
  }
  // #endregion

  // #region GET THIRD PERSONS
  if (canContinue) {
    try {
      if (req.PQUserInfo) {
        ThirdPersonRepoResponse = await PQThirdPartyPersonRepository.getThirdPartyPersonByUserIdRepo(req.PQUserInfo?.userId)
      } else {
        canContinue = false
        errorHandler = new Error('No user found')
      }
    } catch (e) {
      canContinue = false
      errorHandler = e as Error
    }
  }
  // #endregion

  // #region RESPONSE
  if (canContinue) {
    response.success = canContinue
    response = {
      ...response,
      detail: ThirdPersonRepoResponse as [object] ?? []
    }
  } else {
    response.success = canContinue
    response.message = errorHandler?.toString() ?? 'Unknown Error'
  }

  return response
  // #endregion
}

export default {
  createThirdPartyPersonBusinessV1,
  getThirdPartyPersonBusinessByIdNumV1,
  getThirdPartyPersonBusinessByUserIdV1
}
