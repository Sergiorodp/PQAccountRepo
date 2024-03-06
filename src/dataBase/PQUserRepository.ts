import { PQUser, PQCreatedUser} from "@app/models/PQUserModel";
import { MongoUsersRepository as userRepository } from "./mongoDB/CRUD/PQ_CRUD_Users";

//#region CREATE USER  
export async function createNewPQUserRepo( user : PQUser ) : Promise<PQCreatedUser | void>{
    const newUser = await userRepository.getInstance().create(user)
    
    const userData : PQCreatedUser = {
        userName: newUser.userName,
        name: newUser.name,
        password: '***********',
        email: newUser.email,
        id: newUser.id
    }
    return userData
}
//#endregion