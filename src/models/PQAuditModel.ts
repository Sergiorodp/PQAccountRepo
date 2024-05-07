import { z } from 'zod'

// TODO complete audit schemas
const AuditSchema = z.object({
  correlationId: z.string(),
  service: z.string(),
  date: z.string().datetime({ message: 'Invalid datetime string! Must be UTC.' }),
  params: z.string(), // stringify params
  type: z.string(),
  message: z.string(),
  IP: z.string().optional()
})

export type TAuditRecordRequestModel = z.infer<typeof AuditSchema>

export interface IAuditRecordResponseModel {
  correlationId?: string
  service?: string
  params?: string // stringify params
  type?: string
  message?: string
  date?: string
  IP?: string
}

export default {
  AuditSchema
}
