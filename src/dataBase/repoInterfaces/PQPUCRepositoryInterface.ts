import { IPUC } from "@app/models/PQPUCModel";

export interface pucRepository {
    insert( PUC: IPUC): Promise<IPUC | void>
}