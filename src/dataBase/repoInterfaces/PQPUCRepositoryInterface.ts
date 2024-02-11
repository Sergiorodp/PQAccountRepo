import { PUC } from "@app/models/PQPUCModel";

export interface pucRepository {
    insert( PUC: PUC ): Promise<PUC | void>
}