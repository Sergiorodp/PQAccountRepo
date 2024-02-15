import { PQUser, UserSchema } from "@app/models/PQUserModel";
import { createNewPQUserRepo } from '@app/dataBase/PQUserRepository'
import { Request } from "express";
import { ZodError } from "zod";


function createUser( req : Request ): PQUser | string | undefined {
    let continueFlag : boolean = true
    let error : ZodError | null = null
    const userParse = UserSchema.safeParse(req.body)

    //#region AUDIT

    //#endregion

    //#region CREATE USER
    if(continueFlag){
        if(userParse.success){
            createNewPQUserRepo(userParse.data)
        }else{
            continueFlag = false
            error = userParse.error
        }
    }
    //#endregion

    //#region RESPONSE
    if(continueFlag){
        return req.body
    }else{
        return error?.toString()
    }
    //#endregion
}

export {
    createUser
}