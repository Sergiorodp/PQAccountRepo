import { Router, Request, Response} from "express";
import { HTTPCODES } from "@app/utils/httpCodes"
import { createThirdPartiePersonBusinessV1 } from '@app/business/PQThirdPartiePersonBusiness'

const thirdPartiesRouter = Router()

console.log(`[[ THIRD PARTIES LOADED ]]`)

function createThirdPartiePersonControllerv1( req: Request, res: Response){
    //#region AUDITORIA DE ENTRADA
    // TODO 
    //#endregion
    if(req.body){
        createThirdPartiePersonBusinessV1(req)
        .then( message => {
            if(typeof thirdPartiesRouter !== 'string'){
                res.status(HTTPCODES.created).send(message)
            }else{
                res.status(HTTPCODES.badRequest).send(message)
            }
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

