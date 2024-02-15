import { PQUser } from "@app/models/PQUserModel";
import { MongoUsersRepository as userRepository } from "./mongoDB/CRUD/PQ_CRUD_Users";

//#region CREATE USER  
export function createNewPQUserRepo( user : PQUser ){
    userRepository.getInstance().insert(user)
    return user
}
//#endregion