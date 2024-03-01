import { Router, Request, Response} from "express";
import { HTTPCODES } from "@app/utils/httpCodes"
import { createThirdPartiePersonBussinessV1 } from '@app/business/PQThirdPartiePersonBusiness'

const thirdPartiesRouter = Router()

console.log(`[[ THIRD PARTIES LOADED ]]`)

function createThirdPartiePersonControllerv1( req: Request, res: Response){
    //#region AUDITORIA DE ENTRADA
    // TODO 
    //#endregion
    if(req.body){
        createThirdPartiePersonBussinessV1(req)
        .then( thirdPersonCreated => {
            res.status(HTTPCODES.created).send(thirdPersonCreated)
        })
    } else {
        res.status(HTTPCODES.badRequest).send('No body found')
    }
    //#region AUDITORIA DE SALIDA
    // TODO
    //#endregion
}

thirdPartiesRouter.post('/create/v1', createThirdPartiePersonControllerv1)

export default thirdPartiesRouter

