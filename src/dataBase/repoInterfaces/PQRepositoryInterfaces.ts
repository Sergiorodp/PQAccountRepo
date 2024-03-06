import { PUC } from "@app/models/PQPUCModel";
import { PQUser } from "@app/models/PQUserModel";
import { PQThirdPartiePerson } from "@app/models/PQThirdPartieModel";

export interface IPucRepository {
    insert( PUC: PUC ): Promise<PUC | void>
}

export interface IPQUserRepository {
    create( User : PQUser ): Promise<PQUser | void>
}

export interface IPQThirdPartiesRepository {
    create( TPPerson : PQThirdPartiePerson ): Promise< PQThirdPartiePerson | void>
}