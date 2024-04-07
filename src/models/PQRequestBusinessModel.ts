import { type Request } from 'express'

export interface IPQRequestBusiness extends Request {
  PQUserInfo?: IPQUserInfo
}

interface IPQUserInfo {
  userName: string
  name: string
  email: string
  role: string
  userId: string
}
