import { TPQThirdPartyPerson, PQThirdPartyPersonSchema} from "@app/models/PQThirdPartyPersonModel";
import { createPQThirdPartyPersonRepo } from "@app/dataBase/PQThirdPartyPersonRepository";
import { Request } from "express";
import { ZodError } from "zod";

export async function createThirdPartyPersonBusinessV1( req : Request ) : Promise<TPQThirdPartyPerson | string>{
    let continueFlag : boolean = true
    let error : ZodError | null = null
    let response = {
        //TODO Response body
    }
    let thirdPersonParse, createdThirdPerson = null

    //#region VALIDATE DATA
    if(continueFlag){
        thirdPersonParse = PQThirdPartyPersonSchema.safeParse(req.body)
        if(!thirdPersonParse.success){
            continueFlag = false
            error = thirdPersonParse.error
        }
    }
    //#endregion

    //#region CREATE PERSON
    if(continueFlag){
        try{
            if(thirdPersonParse?.success){
                createdThirdPerson = await createPQThirdPartyPersonRepo(thirdPersonParse?.data);
            }
        }catch{
            continueFlag = false
        }
    }
    //#endregion

    //#region RESPONSE
    if(continueFlag){
        return createdThirdPerson ?? JSON.stringify({
            error: 'No person created',
            message: 'DB error, can´t create person'
        })
    }else{
        return error?.toString() ?? 'error desconocido'
    }
    //#endregion
}


export async function getThirdPartiePerson(id: string) {
     //#region AUDITORIA DE ENTRADA
    // TODO 
    //#endregion
}