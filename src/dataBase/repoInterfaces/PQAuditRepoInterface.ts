import { type IAuditRecordResponseModel, type TAuditRecordRequestModel } from '@app/models/PQAuditModel'

export interface IPQAuditRepository {
  createRecord: (TPPerson: TAuditRecordRequestModel) => Promise<IAuditRecordResponseModel>
  getRecordById?: (id: string) => Promise<IAuditRecordResponseModel>
  getRecordByUser?: (idNum: string) => Promise<IAuditRecordResponseModel>
}
