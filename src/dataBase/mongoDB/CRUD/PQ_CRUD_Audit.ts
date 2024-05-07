import { type TAuditRecordRequestModel, type IAuditRecordResponseModel } from '@app/models/PQAuditModel'
import { type IPQAuditRepository } from '@app/dataBase/repoInterfaces/PQAuditRepoInterface'
import AuditMongoConnection from '../ORM/PQAuditSchemas'

export class MongoAuditRepository implements IPQAuditRepository {
  private static instance: MongoAuditRepository

  private constructor () {
    // Private constructor to prevent direct instantiation
  }

  public static getInstance (): MongoAuditRepository {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!MongoAuditRepository.instance) {
      MongoAuditRepository.instance = new MongoAuditRepository()
    }
    return MongoAuditRepository.instance
  }

  async createRecord (record: TAuditRecordRequestModel): Promise<IAuditRecordResponseModel> {
    try {
      const mongoRes = await AuditMongoConnection.create(record)
      const userFormat = { ...mongoRes.toJSON(), _id: '', __v: '' }
      return userFormat
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const error = `create Audit record unknown error: ${e}`
      return await Promise.reject(new Error(error))
    }
  }
}
