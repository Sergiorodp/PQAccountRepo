import { PQThirdPartiePerson } from "@app/models/PQThirdPartieModel";
import MDBThirdPartiePersonConnection, { IThirdPartiePersonShema } from "../Schemas/PQThirtdPartiePersonShemas";
import { IPQThirdPartiesRepository } from "@app/dataBase/repoInterfaces/PQRepositoryInterfaces";

export class MongoThirdPartiePersonRepository implements IPQThirdPartiesRepository {

    private static instance: MongoThirdPartiePersonRepository;

    private constructor() {
        // Private constructor to prevent direct instantiation
      }

      public static getInstance(): MongoThirdPartiePersonRepository {
        if (!MongoThirdPartiePersonRepository.instance) {
            MongoThirdPartiePersonRepository.instance = new MongoThirdPartiePersonRepository();
        }
        return MongoThirdPartiePersonRepository.instance;
      }

    async insert( TPPerson : PQThirdPartiePerson ): Promise<PQThirdPartiePerson>{
        const mongoRes : Array<IThirdPartiePersonShema> = await MDBThirdPartiePersonConnection.insertMany([TPPerson])
        return mongoRes[0]
    }
}
