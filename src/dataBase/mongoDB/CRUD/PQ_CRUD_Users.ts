import { PQUser } from "@app/models/PQUserModel";
import MDBUserConnection, { IUserShema } from "../Schemas/User/PQUserMainDbSchemas";
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

    async insert( User : PQUser ): Promise<PQUser>{
        const mongoRes : Array<IUserShema> = await MDBUserConnection.insertMany([User])
        return mongoRes[0]
    }
}
