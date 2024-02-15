import { PUC } from "@app/models/PQPUCModel";
import PUCConection from "../Schemas/Standars/PQPucDbSchemas";
import { pucRepository } from "@app/dataBase/repoInterfaces/PQRepositoryInterfaces";

export class MongoPUCRepository implements pucRepository {

    private static instance: MongoPUCRepository;

    private constructor() {
        // Private constructor to prevent direct instantiation
      }

      public static getInstance(): MongoPUCRepository {
        if (!MongoPUCRepository.instance) {
            MongoPUCRepository.instance = new MongoPUCRepository();
        }
        return MongoPUCRepository.instance;
      }

    insert( PUC : PUC ): Promise<PUC | void>{
        return PUCConection.insertMany([PUC])
        .then( () => {
            console.log("new shema")
        })
        .catch(() => {
            console.error("error load schema")
        })
    }

    getById( PucId : string) {
        return PUCConection.findById(PucId)
    }
}


