import {
  type TPQThirdPartyPersonRequest,
  type IPQThirdPartyPersonResponse
} from '@app/models/PQThirdPartyPersonModel'
import MDBThirdPartyPersonConnection, { type IThirdPartyPersonSchema } from '../Schemas/PQThirdPartyPersonSchemas'
import { type IPQThirdPartiesRepository } from '@app/dataBase/repoInterfaces/PQThirdPartyPersonRepoInterface'

export class MongoThirdPersonRepository implements IPQThirdPartiesRepository {
  private static instance: MongoThirdPersonRepository
  private static readonly projection = { _id: 0, _v: 0 }

  private constructor () {
    // Private constructor to prevent direct instantiation
  }

  public static getInstance (): MongoThirdPersonRepository {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!MongoThirdPersonRepository.instance) {
      MongoThirdPersonRepository.instance = new MongoThirdPersonRepository()
    }
    return MongoThirdPersonRepository.instance
  }

  async create (TPPerson: TPQThirdPartyPersonRequest): Promise<IThirdPartyPersonSchema> {
    const mongoRes = await MDBThirdPartyPersonConnection.create(TPPerson)
    const formatObj = { ...mongoRes.toJSON(), _id: '', __v: '' }
    return formatObj
  }

  async getByIdNum (idNum: string): Promise<IPQThirdPartyPersonResponse> {
    try {
      const mongoRes = await MDBThirdPartyPersonConnection.findOne({ idNum }, MongoThirdPersonRepository.projection)
      if (mongoRes?.idNum) {
        const formatObj = mongoRes?.toJSON()
        return formatObj
      }
      return await Promise.reject(new Error('no Third Party Person Found'))
    } catch {
      return await Promise.reject(new Error('DB ERROR'))
    }
  }
}
