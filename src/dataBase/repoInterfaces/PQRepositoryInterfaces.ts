import { PUC } from "@app/models/PQPUCModel";
import { PQUser } from "@app/models/PQUserModel";
import { PQThirdPartiePerson } from "@app/models/PQThirdPartieModel";

export interface IPucRepository {
    insert( PUC: PUC ): Promise<PUC | void>
}

export interface IPQUserRepository {
    insert( User : PQUser ): Promise<PQUser | void>
}

export interface IPQThirdPartiesRepository {
    insert( TPPerson : PQThirdPartiePerson ): Promise< PQThirdPartiePerson | void>
}