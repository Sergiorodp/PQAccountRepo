import { PQThirdPartyPersonSchema } from '@app/models/PQThirdPartyPersonModel'
import PQThirdPartyPersonRepository from '@app/dataBase/PQThirdPartyPersonRepository'
import { type Request } from 'express'
import { type IResponseBusiness } from '@app/models/PQResponseBusinessModel'

async function createThirdPartyPersonBusinessV1 (req: Request): Promise<IResponseBusiness> {
  let canContinue: boolean = true
  let errorHandler: Error | null = null
  let response: IResponseBusiness = {
    message: '',
    success: false,
    detail: [{}]
  }
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

  // #region CREATE PERSON
  if (canContinue) {
    try {
      if (thirdPersonParse?.success) {
        createdThirdPerson = await PQThirdPartyPersonRepository.createPQThirdPartyPersonRepo(thirdPersonParse?.data)
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

// TODO create getThirdPartyPerson
async function getThirdPartyPersonBusinessV1 (req: Request): Promise<IResponseBusiness> {
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

export default {
  createThirdPartyPersonBusinessV1,
  getThirdPartyPersonBusinessV1
}
