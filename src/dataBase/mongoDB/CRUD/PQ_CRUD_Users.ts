import { PQUser } from "@app/models/PQUserModel";
import MDBUserConnection from "../Schemas/User/PQUserMainDbSchemas";
import { IPQUserRepository } from "@app/dataBase/repoInterfaces/PQRepositoryInterfaces";

export class MongoUsersRepository implements IPQUserRepository {

    private static instance: MongoUsersRepository;

    private constructor() {
        // Private constructor to prevent direct instantiation
      }

      public static getInstance(): MongoUsersRepository {
        if (!MongoUsersRepository.instance) {
            MongoUsersRepository.instance = new MongoUsersRepository();
        }
        return MongoUsersRepository.instance;
      }

    insert( User : PQUser ): Promise<PQUser | void>{
        return MDBUserConnection.insertMany([User])
        .then( () => {
            console.log("new shema")
        })
        .catch(() => {
            console.error("error load schema")
        })
    }
}
