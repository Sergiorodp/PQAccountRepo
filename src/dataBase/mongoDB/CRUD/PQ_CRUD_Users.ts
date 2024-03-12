import { PQUser } from "@app/models/PQUserModel";
import MDBUserConnection, { IUserSchema } from "../Schemas/PQUserMainDbSchemas";
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

    async create( User : PQUser ): Promise<IUserSchema>{
        const mongoRes = await MDBUserConnection.create(User)
        const userFormat = { ...mongoRes.toJSON(), _id: '', __v : ''}
        return userFormat
    }
}
