import { TPQThirdPartyPerson } from "@app/models/PQThirdPartyPersonModel";
import MDBThirdPartyPersonConnection, { IThirdPartyPersonSchema } from "../Schemas/PQThirdPartyPersonSchemas";
import { IPQThirdPartiesRepository } from "@app/dataBase/repoInterfaces/PQRepositoryInterfaces";

export class MongoThirdPersonRepository implements IPQThirdPartiesRepository {

    private static instance: MongoThirdPersonRepository;

    private constructor() {
        // Private constructor to prevent direct instantiation
      }

      public static getInstance(): MongoThirdPersonRepository {
        if (!MongoThirdPersonRepository.instance) {
            MongoThirdPersonRepository.instance = new MongoThirdPersonRepository();
        }
        return MongoThirdPersonRepository.instance;
      }

    async create( TPPerson : TPQThirdPartyPerson ): Promise<IThirdPartyPersonSchema>{
        const mongoRes = await MDBThirdPartyPersonConnection.create(TPPerson)
        const formatObj = {...mongoRes.toJSON(), _id : '', __v : ''}
        return formatObj
    }
}