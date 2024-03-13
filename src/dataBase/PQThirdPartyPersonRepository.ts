import { MongoThirdPersonRepository } from '@app/dataBase/mongoDB/CRUD/PQ_CRUD_THIRD_PARTY'
import { type TPQThirdPartyPerson } from '@app/models/PQThirdPartyPersonModel'

// #region CREATE PERSON
export async function createPQThirdPartyPersonRepo (thirdPerson: TPQThirdPartyPerson | undefined): Promise<TPQThirdPartyPerson> {
  if (thirdPerson === undefined) return await Promise.reject(new Error('No third Person'))
  return await MongoThirdPersonRepository.getInstance().create(thirdPerson)
}
// #endregion
