import { PQCreatedUser, PQUser, UserSchema } from "@app/models/PQUserModel";
import { createNewPQUserRepo } from '@app/dataBase/PQUserRepository'
import envs from "@app/config/envVars";
import { Buffer } from "node:buffer";
import { Request } from "express";
import { ZodError } from "zod";
import argon from'argon2'

//models handler
import { IResponseBusiness } from "@app/models/PQResponseBusinessModel";


async function createUser( req : Request ): Promise<IResponseBusiness<PQCreatedUser>> {
    let continueFlag : boolean = true
    let error : ZodError | null = null
    let response : IResponseBusiness<PQUser> = {
        message : '',
        detail: [{}],
        success: true
    }
    let userParse, createdUserResponse

    //#region VALIDATE DATA
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
            if(!envs.HASH_KEY){
                throw new Error('HASH_KEY not found')
            }
            const pswd = await argon.hash( userParse.data.password ?? '', {secret: Buffer.from(envs.HASH_KEY)})
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
        createdUserResponse = await createNewPQUserRepo(userParse.data)
    }
    //#endregion

    //#region RESPONSE
    if(continueFlag){
        response.success = continueFlag
        if(createdUserResponse){
            response = {
                ...response,
                detail: [createdUserResponse]
            }
        }else {
            response = {
                ...response,
                message: 'No user created, DB problem',
            }
        }
    }else{
        response.success = continueFlag
        response.message = error?.toString() ?? 'Unknown Error'
    }

    return response
    //#endregion
}

export {
    createUser
}