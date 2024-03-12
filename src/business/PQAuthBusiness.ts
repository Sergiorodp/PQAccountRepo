import { Request, Response } from "express"
import { IResponseBusiness } from "@app/models/PQResponseBusinessModel"
import { TPQLogIn, LogInSchema } from "@app/models/PQAuthModel"
import argon from'argon2'
import jwt from "jsonwebtoken"

//#region GET PUC BY CODE
async function userLoginBusinessV1(req: Request){

    let canContinue = true;
    let response : IResponseBusiness<object> = {
        message: '',
        success: false,
        detail: [{}]
    }
    let userInfo : TPQLogIn | null = null
    //#region IN AUDIT
    //#endregion

    //#region DATA CHECK
    if(canContinue) {
        const userParse = LogInSchema.safeParse(req.body)
        if(userParse.success){
            userInfo = userParse.data;
        }else{
            canContinue = false
        }
    }
    //#endregion

    //#region QUERY USER
    if(canContinue){
        
    }
    //#endregion
    //#region VERIFY PASSWORD
    if(canContinue){
        argon.verify('', userInfo?.password as string)
    } 
    //#endregion
}
//#endregion

//#region healthCheck
function healthCheck(_ : Request, res: Response){
    res.send({
        responde: 'PUC API IS WORKING'
    })
}
//#endregion

export default {
    healthCheck,
    userLoginBusinessV1
}