import { Request, Response, Router } from "express";
import authBusiness from "@app/business/PQAuthBusiness";
import { HTTPCODES } from "@app/utils/httpCodes";

const router = Router()

console.log(`[[ AUTH LOADED ]]`)

function logIn( req: Request, res: Response){
     //#region AUDITORIA DE ENTRADA
    // TODO 
    //#endregion
    if(req.body){
        
    } else {
        res.status(HTTPCODES.badRequest).send('No body found')
    }
    //#region AUDITORIA DE SALIDA
    // TODO
    //#endregion
}

router.get(`/health`, authBusiness.healthCheck)
router.get(`/`)

export default router