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

    async create( User : PQUser ): Promise<IUserSchema | Error>{
      try{
        const mongoRes = await MDBUserConnection.create(User)
        const userFormat = { ...mongoRes.toJSON(), _id: '', __v : ''}
        return userFormat
      }catch(e){
        return new Error(`create User unknown error: ${e}`)
      }
    }

    async getById( id: string): Promise<IUserSchema | Error> {
      try{
        const mongoRes = await MDBUserConnection.findById<IUserSchema>(id) 
        if(mongoRes?.id){
          const userFormat = { ...mongoRes?.toJSON<IUserSchema>(), _id: '', __v : ''}
          return userFormat
        }
        return new Error('no User Found')
      }catch(e){
        return new Error(`getUserById unknown error: ${e}`)
      }
    }
}
