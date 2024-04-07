import {
  type IPQThirdPartyPersonRequest,
  type IPQThirdPartyPersonResponse
} from '@app/models/PQThirdPartyPersonModel'
import MDBThirdPartyPersonConnection, { type IThirdPartyPersonSchema } from '../ORM/PQThirdPartyPersonSchemas'
import { type IPQThirdPartiesRepository } from '@app/dataBase/repoInterfaces/PQThirdPartyPersonRepoInterface'
import { type ProjectionType } from 'mongoose'
import { type ObjectId } from 'mongodb'

export class MongoThirdPersonRepository implements IPQThirdPartiesRepository {
  private static instance: MongoThirdPersonRepository
  private static readonly projection = { _id: 0, __v: 0 }

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

  async create (TPPerson: IPQThirdPartyPersonRequest): Promise<IThirdPartyPersonSchema> {
    const mongoRes = await MDBThirdPartyPersonConnection.create(TPPerson)
    const formatObj = { ...mongoRes.toJSON(), _id: '', __v: '', id: '' }
    return formatObj
  }

  async getByIdNum (idNum: string): Promise<IPQThirdPartyPersonResponse> {
    try {
      const mongoRes = await MDBThirdPartyPersonConnection.findOne({ idNum }, MongoThirdPersonRepository.projection)
      if (mongoRes?.id) {
        const formatObj = mongoRes?.toJSON()
        return formatObj
      }
      return await Promise.reject(new Error('no Third Party Person Found'))
    } catch {
      return await Promise.reject(new Error('DB ERROR'))
    }
  }

  async getByUserId (userId: ObjectId, projection: ProjectionType<IPQThirdPartyPersonRequest> = MongoThirdPersonRepository.projection): Promise<IPQThirdPartyPersonResponse[]> {
    try {
      const mongoRes = await MDBThirdPartyPersonConnection.find({ userId })
      if (mongoRes.length > 0) {
        const formatObj = mongoRes?.map(item => item.toJSON<IPQThirdPartyPersonResponse>())
        return formatObj
      }
      return await Promise.reject(new Error('no Third Party Person Found'))
    } catch (e) {
      return await Promise.reject(e)
    }
  }
}
