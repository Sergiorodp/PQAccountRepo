import { PUC } from "@app/models/PQPUCModel";
import { PQUser } from "@app/models/PQUserModel";
import { TPQThirdPartyPerson } from "@app/models/PQThirdPartyPersonModel";
import { IUserSchema } from "../mongoDB/Schemas/PQUserMainDbSchemas";

export interface IPucRepository {
    insert( PUC: PUC ): Promise<PUC | void>
}

export interface IPQUserRepository {
    create( User : PQUser ): Promise<PQUser | Error>
    getById( id: string): Promise<IUserSchema | Error>
}

export interface IPQThirdPartiesRepository {
    create( TPPerson : TPQThirdPartyPerson ): Promise< TPQThirdPartyPerson | void>
}