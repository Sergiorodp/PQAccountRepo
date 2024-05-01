import { z } from 'zod'

// TODO complete audit schemas
const AuditSchema = z.object({
  clientId: z.string(),
  service: z.string(),
  params: z.string(), // stringify params
  type: z.string(),
  message: z.string()
})

export type TAuditRecordRequestModel = z.infer<typeof AuditSchema>

export interface IAuditRecordResponseModel {
  clientId: string
  service: string
  params: string // stringify params
  type: string
  message: string
}

export default {
  AuditSchema
}
