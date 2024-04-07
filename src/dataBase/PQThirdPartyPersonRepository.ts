import { MongoThirdPersonRepository } from '@app/dataBase/mongoDB/CRUD/PQ_CRUD_THIRD_PARTY'
import { type IPQThirdPartyPersonRequest, type IPQThirdPartyPersonResponse } from '@app/models/PQThirdPartyPersonModel'
import { ObjectId } from 'mongodb'

// #region CREATE PERSON
async function createPQThirdPartyPersonRepo (thirdPerson: IPQThirdPartyPersonRequest): Promise<IPQThirdPartyPersonResponse> {
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

async function getThirdPartyPersonByUserIdRepo (userId: string): Promise<IPQThirdPartyPersonResponse[]> {
  if (userId) return await MongoThirdPersonRepository.getInstance().getByUserId(new ObjectId(userId))
  return await Promise.reject(new Error('No userId'))
}

export default {
  createPQThirdPartyPersonRepo,
  getPQThirdPartyPersonByIdNumRepo,
  getThirdPartyPersonByUserIdRepo
}
