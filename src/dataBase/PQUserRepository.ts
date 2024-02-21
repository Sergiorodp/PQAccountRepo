import { PQUser } from "@app/models/PQUserModel";
import { MongoUsersRepository as userRepository } from "./mongoDB/CRUD/PQ_CRUD_Users";

//#region CREATE USER  
export async function createNewPQUserRepo( user : PQUser ) : Promise<PQUser | void>{
    const newUser = await userRepository.getInstance().insert(user)
    const userData : PQUser = {
        userName: newUser.userName,
        name: newUser.name,
        password: '***********',
        email: newUser.email
    }
    return userData
}
//#endregion