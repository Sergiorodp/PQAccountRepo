import { PQThirdPartiePerson, PQThirdPartiePersonShema} from "@app/models/PQThirdPartieModel";
import { createPQThirdPartiePersonRepo } from "@app/dataBase/PQThirdPartiePersonRepository";
import { Request } from "express";
import { ZodError } from "zod";

async function createThirdPartiePerson( req : Request ) : Promise<PQThirdPartiePerson | string>{
    let continueFlag : boolean = true
    let error : ZodError | null = null
    let thisdPartieParse, createdThirdPartiePerson = null
    
    //#region AUDITORIA DE ENTRADA
    // TODO 
    //#endregion

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
        return ''
    }else{
        return error?.toString() ?? 'error desconocido'
    }
    //#endregion

    //#region AUDITORIA DE SALIDA
    // TODO
    //#endregion
}