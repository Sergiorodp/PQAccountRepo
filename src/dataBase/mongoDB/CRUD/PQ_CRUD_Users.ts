import { type TPQUserRequest, type IPQUserResponse } from '@app/models/PQUserModel'
import MDBUserConnection, { type IUserRequestSchema, type IUserResponseSchema } from '../Schemas/PQUserMainDbSchemas'
import { type IPQUserRepository } from '@app/dataBase/repoInterfaces/PQRepositoryInterfaces'

export class MongoUsersRepository implements IPQUserRepository {
  private static instance: MongoUsersRepository

  private constructor () {
    // Private constructor to prevent direct instantiation
  }

  public static getInstance (): MongoUsersRepository {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!MongoUsersRepository.instance) {
      MongoUsersRepository.instance = new MongoUsersRepository()
    }
    return MongoUsersRepository.instance
  }

  async create (User: TPQUserRequest): Promise<IUserRequestSchema> {
    try {
      const mongoRes = await MDBUserConnection.create(User)
      const userFormat = { ...mongoRes.toJSON(), _id: '', __v: '' }
      return userFormat
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const error = `create User unknown error: ${e}`
      return await Promise.reject(new Error(error))
    }
  }

  async getById (id: string): Promise<IUserRequestSchema> {
    try {
      const projection = { _id: 0, _v: 0 }
      const mongoRes = await MDBUserConnection.findById<IUserRequestSchema>(id, projection)
      if ((mongoRes?.id) != null) {
        const userFormat = mongoRes?.toJSON<IUserRequestSchema>()
        return userFormat
      }
      return await Promise.reject(new Error('no User Found'))
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const error = `getUserById unknown error: ${e}`
      return await Promise.reject(new Error(error))
    }
  }

  async getByEmail (email: string): Promise<IPQUserResponse> {
    try {
      const projection = { _id: 0, __v: 0 }
      const mongoRes = await MDBUserConnection.findOne<IUserResponseSchema>({ email }, projection)
      if ((mongoRes?.email) != null) {
        const userFormat = mongoRes?.toJSON<IUserResponseSchema>()
        return userFormat
      }
      return await Promise.reject(new Error('no User Found'))
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const error = `getUserByEmail unknown error: ${e}`
      return await Promise.reject(new Error(error))
    }
  }
}
