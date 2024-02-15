import { PUC } from "@app/models/PQPUCModel";

import { PQUser } from "@app/models/PQUserModel";

export interface IPucRepository {
    insert( PUC: PUC ): Promise<PUC | void>
}

export interface IPQUserRepository {
    insert( User : PQUser ): Promise<PQUser | void>
}