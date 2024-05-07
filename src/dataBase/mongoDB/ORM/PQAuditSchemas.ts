import mongoose, { Schema, type Document } from 'mongoose'
import { type TAuditRecordRequestModel } from '@app/models/PQAuditModel'

export interface IAuditRequestSchema extends TAuditRecordRequestModel, Document {}

export const AuditRequestSchema: Schema = new Schema({
  correlationId: { type: String, require: true },
  service: { type: String, require: true },
  date: { type: String, require: true },
  params: { type: String, require: true }, // stringify params
  type: { type: String, require: true },
  message: { type: String, require: true },
  IP: { type: String, require: false, default: '' }
})

export default mongoose.model<IAuditRequestSchema>('PQ_AUDIT_TCP_TRACE', AuditRequestSchema)
