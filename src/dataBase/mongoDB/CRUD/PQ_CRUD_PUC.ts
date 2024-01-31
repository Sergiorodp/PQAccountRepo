import { IPUC } from "@app/models/PQPUCModel";
import PUCConection from "../Schemas/Standars/PQPucDbSchemas";
import { pucRepository } from "@app/dataBase/repoInterfaces/PQPUCRepositoryInterface";

export class mongoPUCRepository implements pucRepository {

    private static instance: mongoPUCRepository;

    private constructor() {
        // Private constructor to prevent direct instantiation
      }

      public static getInstance(): mongoPUCRepository {
        if (!mongoPUCRepository.instance) {
            mongoPUCRepository.instance = new mongoPUCRepository();
        }
        return mongoPUCRepository.instance;
      }

    insert( PUC : IPUC ): Promise<IPUC | void>{
        return PUCConection.insertMany([PUC])
        .then( () => {
            console.log("new shema")
        })
        .catch(() => {
            console.error("error load schema")
        })
    }
}


