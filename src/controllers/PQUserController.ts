import { Router, Request, Response} from "express";
import { createUser } from '@app/business/PQUsersBusiness'
import { HTTPCODES } from "@app/utils/httpCodes"

const router = Router()

console.log(`[[ USERS ]]`)

function createUserV1(req : Request, res : Response){
    if(req.body){
        createUser(req)
        .then( userInfo => {
            res.status(HTTPCODES.created).send(userInfo)
        })
    }else{
        res.status(HTTPCODES.badRequest).send({
            value: 'transacción no procesada, no se encontro el body'
        })
    }
}

router.get('/getUser/v1', )
router.post('/createUser/v1', createUserV1)

export default router