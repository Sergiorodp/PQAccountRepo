import { type PUC } from '@app/models/PQPUCModel'
import { type IPQUserResponse, type TPQUserRequest } from '@app/models/PQUserModel'

export interface IPucRepository {
  insert: (PUC: PUC) => Promise<PUC>
}

export interface IPQUserRepository {
  create: (User: TPQUserRequest) => Promise<IPQUserResponse>
  getById: (id: string) => Promise<IPQUserResponse>
  getByEmail: (email: string) => Promise<IPQUserResponse>
}
