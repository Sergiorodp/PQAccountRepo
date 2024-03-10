import { Request, Response } from "express"
import { IResponseBusiness } from "@app/models/PQResponseBusinessModel";

//#region GET PUC BY CODE
function userLoginBusiness(req: Request){

    let canContinue = true;
    let response : IResponseBusiness<object> = {
        message: '',
        success: false,
        detail: [{}]
    }

    //#region IN AUDIT
    //#endregion
    //#region DATA CHECK
    if(canContinue) {
        
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
    healthCheck
}