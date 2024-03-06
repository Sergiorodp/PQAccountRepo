import { PQThirdPartiePerson, PQThirdPartiePersonShema} from "@app/models/PQThirdPartieModel";
import { createPQThirdPartiePersonRepo } from "@app/dataBase/PQThirdPartiePersonRepository";
import { Request } from "express";
import { ZodError } from "zod";

export async function createThirdPartiePersonBusinessV1( req : Request ) : Promise<PQThirdPartiePerson | string>{
    let continueFlag : boolean = true
    let error : ZodError | null = null
    let response = {
        //TODO Response body
    }
    let thisdPartieParse, createdThirdPartiePerson = null

    //#region VALIDATE DATA
    if(continueFlag){
        thisdPartieParse = PQThirdPartiePersonShema.safeParse(req.body)
        if(!thisdPartieParse.success){
            continueFlag = false
            error = thisdPartieParse.error
        }
    }
    //#endregion

    //#region CREATE PERSON
    if(continueFlag){
        try{
            if(thisdPartieParse?.success){
                createdThirdPartiePerson = await createPQThirdPartiePersonRepo(thisdPartieParse?.data);
            }
        }catch{
            continueFlag = false
        }
    }
    //#endregion

    //#region RESPONSE
    if(continueFlag){
        return createdThirdPartiePerson ?? JSON.stringify({
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