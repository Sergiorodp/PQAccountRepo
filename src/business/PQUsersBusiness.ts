import { PQUser, UserSchema } from "@app/models/PQUserModel";
import { createNewPQUserRepo } from '@app/dataBase/PQUserRepository'
import { Request } from "express";


function createUser( req : Request ): PQUser | string{
    let continueFlag = true;
    const userParse = UserSchema.safeParse(req.body)

    //#region AUDIT

    //#endregion

    //#region CREATE USER
    if(continueFlag){
        if(userParse.success){
            createNewPQUserRepo(userParse.data)
        }else{
            continueFlag = false
        }
    }
    //#endregion

    //#region RESPONSE
    if(continueFlag){
        return req.body
    }else{
        return 'Error'
    }
    //#endregion
}

export {
    createUser
}