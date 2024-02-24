import { Router, Request, Response} from "express";
import { HTTPCODES } from "@app/utils/httpCodes"

const thirdPartiesRouter = Router()

console.log(`[[ THIRD PARTIES LOADED ]]`)

function createThirdPartiePerson( req: Request, res: Response){
    if(req.body){
        res.send('created')
    }else{
        res.status(HTTPCODES.badRequest).send('No body found')
    }
}

thirdPartiesRouter.post('/create/v1', createThirdPartiePerson)

export default thirdPartiesRouter

