import { PQThirdPartiePerson } from "@app/models/PQThirdPartieModel";

//#region CREATE PERSON
export async function createPQThirdPartiePersonRepo( thirdPerson : PQThirdPartiePerson | undefined){
    if(thirdPerson == undefined) return;
    //await PQThirdPartiePerson.create(thirdPerson);
}
//#endregion