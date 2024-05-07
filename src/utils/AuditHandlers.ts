import AuditModel, { type TAuditRecordRequestModel } from '@app/models/PQAuditModel'

function saveRequest (baseRequest: TAuditRecordRequestModel, requestType: string): void {
  // #region CHECK DATA
  const AuditSafeParse = AuditModel.AuditSchema.safeParse(baseRequest)
  // #endregion
  // TODO Rest of util logic
}

export default {
  saveRequest
}
