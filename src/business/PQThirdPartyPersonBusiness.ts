import { PQThirdPartyPersonSchema } from '@app/models/PQThirdPartyPersonModel'
import { createPQThirdPartyPersonRepo } from '@app/dataBase/PQThirdPartyPersonRepository'
import { type Request } from 'express'
import { type IResponseBusiness } from '@app/models/PQResponseBusinessModel'

export async function createThirdPartyPersonBusinessV1 (req: Request): Promise<IResponseBusiness> {
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
        createdThirdPerson = await createPQThirdPartyPersonRepo(thirdPersonParse?.data)
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

export async function getThirdPartiePerson (id: string): Promise<IResponseBusiness> {
  const canContinue: boolean = true
  const errorHandler: Error | null = null
  let response: IResponseBusiness = {
    message: '',
    success: false,
    detail: [{}]
  }

  // #region RESPONSE
  if (canContinue) {
    response.success = canContinue
    response = {
      ...response,
      detail: [{/* */}]
    }
  } else {
    response.success = canContinue
    response.message = errorHandler ?? 'Unknown Error'
  }

  return response
  // #endregion
}
