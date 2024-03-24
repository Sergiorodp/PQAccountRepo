import { type TPQThirdPartyPersonRequest, type IPQThirdPartyPersonResponse } from '@app/models/PQThirdPartyPersonModel'

export interface IPQThirdPartiesRepository {
  create: (TPPerson: TPQThirdPartyPersonRequest) => Promise<IPQThirdPartyPersonResponse>
  getById?: (id: string) => Promise<IPQThirdPartyPersonResponse>
  getByIdNum: (idNum: string) => Promise<IPQThirdPartyPersonResponse>
}
