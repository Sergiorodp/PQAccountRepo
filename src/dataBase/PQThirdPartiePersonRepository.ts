import { MongoThirdPartiePersonRepository } from "@app/dataBase/mongoDB/CRUD/PQ_CRUD_THIRD_PARTIES";
import { PQThirdPartiePerson } from "@app/models/PQThirdPartieModel";

//#region CREATE PERSON
export async function createPQThirdPartiePersonRepo( thirdPerson : PQThirdPartiePerson | undefined){
    if(thirdPerson == undefined) return; 
    
    return  await MongoThirdPartiePersonRepository.getInstance().create(thirdPerson);
   
}
//#endregion