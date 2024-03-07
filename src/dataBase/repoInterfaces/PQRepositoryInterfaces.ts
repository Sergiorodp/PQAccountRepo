import { PUC } from "@app/models/PQPUCModel";
import { PQUser } from "@app/models/PQUserModel";
import { TPQThirdPartyPerson } from "@app/models/PQThirdPartyPersonModel";

export interface IPucRepository {
    insert( PUC: PUC ): Promise<PUC | void>
}

export interface IPQUserRepository {
    create( User : PQUser ): Promise<PQUser | void>
}

export interface IPQThirdPartiesRepository {
    create( TPPerson : TPQThirdPartyPerson ): Promise< TPQThirdPartyPerson | void>
}