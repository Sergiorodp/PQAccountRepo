import { PQUser, UserSchema } from "@app/models/PQUserModel";
import { createNewPQUserRepo } from '@app/dataBase/PQUserRepository'
import { Buffer } from "node:buffer";
import { Request } from "express";
import { ZodError } from "zod";
import argon from'argon2'


async function createUser( req : Request ): Promise<PQUser | string> {
    let continueFlag : boolean = true
    let error : ZodError | null = null
    let userParse, createdUser

    //#region AUDIT

    //#endregion

    //#region PARSE MODEL
    if(continueFlag){
        userParse = UserSchema.safeParse(req.body) 
        if(!userParse.success){
            continueFlag = false
            error = userParse.error        
        }
    }
    //#endregion

    //#region USER DATA
    if(continueFlag && userParse?.success){
        try{
            const pswd = await argon.hash( userParse.data.password ?? '', {secret: Buffer.from('mysecret')})
            userParse.data = {
                ...userParse.data,
                password: pswd
            }
        }catch{
            continueFlag = false
        }
    }else{
        continueFlag = false
    }
    //#endregion

    //#region CREATE USER   
    if(continueFlag && userParse?.success){
        createdUser = await createNewPQUserRepo(userParse.data)
    }
    //#endregion

    //#region RESPONSE
    if(continueFlag){
        return createdUser ?? 'No user created'
    }else{
        return error?.toString() ?? 'error desconocido'
    }
    //#endregion

    //#region AUDITORIA DE SALIDA
    //#endregion
}

export {
    createUser
}