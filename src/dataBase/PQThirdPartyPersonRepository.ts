import { MongoThirdPersonRepository } from '@app/dataBase/mongoDB/CRUD/PQ_CRUD_THIRD_PARTY'
import { type TPQThirdPartyPersonRequest, type IPQThirdPartyPersonResponse } from '@app/models/PQThirdPartyPersonModel'

// #region CREATE PERSON
async function createPQThirdPartyPersonRepo (thirdPerson: TPQThirdPartyPersonRequest | undefined): Promise<TPQThirdPartyPersonRequest> {
  if (thirdPerson === undefined) return await Promise.reject(new Error('No third Person'))
  return await MongoThirdPersonRepository.getInstance().create(thirdPerson)
}
// #endregion

async function getPQThirdPartyPersonByIdNumRepo (idNum: string): Promise<IPQThirdPartyPersonResponse> {
  try {
    if (idNum) {
      await MongoThirdPersonRepository.getInstance().getByIdNum(idNum)
    }
    return await Promise.reject(new Error('No id Num'))
  } catch (e) {
    return await Promise.reject(e)
  }
}

export default {
  createPQThirdPartyPersonRepo,
  getPQThirdPartyPersonByIdNumRepo
}
