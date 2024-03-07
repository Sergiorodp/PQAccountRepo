import { MongoThirdPersonRepository } from "@app/dataBase/mongoDB/CRUD/PQ_CRUD_THIRD_PARTY";
import { TPQThirdPartyPerson } from "@app/models/PQThirdPartyPersonModel";

//#region CREATE PERSON
export async function createPQThirdPartyPersonRepo( thirdPerson : TPQThirdPartyPerson | undefined){
    if(thirdPerson == undefined) return; 
    
    return  await MongoThirdPersonRepository.getInstance().create(thirdPerson);
   
}
//#endregion