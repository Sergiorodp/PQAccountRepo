import { type PUC } from '@app/models/PQPUCModel'
import { type PQUserRepoResponse, type TPQCreateUserRequest } from '@app/models/PQUserModel'
import { type TPQThirdPartyPerson } from '@app/models/PQThirdPartyPersonModel'

export interface IPucRepository {
  insert: (PUC: PUC) => Promise<PUC>
}

export interface IPQUserRepository {
  create: (User: TPQCreateUserRequest) => Promise<PQUserRepoResponse>
  getById: (id: string) => Promise<PQUserRepoResponse>
  getByEmail: (email: string) => Promise<PQUserRepoResponse>
}

export interface IPQThirdPartiesRepository {
  create: (TPPerson: TPQThirdPartyPerson) => Promise< TPQThirdPartyPerson>
}
