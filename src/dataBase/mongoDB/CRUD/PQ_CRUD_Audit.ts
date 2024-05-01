import { type TAuditRecordRequestModel, type IAuditRecordResponseModel } from '@app/models/PQAuditModel'
import { type IPQAuditRepository } from '@app/dataBase/repoInterfaces/PQAuditRepoInterface'

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
    // TODO create Record logic
  }
}
