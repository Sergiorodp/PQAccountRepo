import { type IPQThirdPartyPersonRequest, type IPQThirdPartyPersonResponse } from '@app/models/PQThirdPartyPersonModel'

export interface IPQThirdPartiesRepository {
  create: (TPPerson: IPQThirdPartyPersonRequest) => Promise<IPQThirdPartyPersonResponse>
  getById?: (id: string) => Promise<IPQThirdPartyPersonResponse>
  getByIdNum: (idNum: string) => Promise<IPQThirdPartyPersonResponse>
}
