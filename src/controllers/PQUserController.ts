import { Router, Request, Response} from "express";
import { createUser } from '@app/business/PQUsersBusiness'
import { HTTPCODES } from "@app/utils/httpCodes"

const usersRouter = Router()

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

usersRouter.get('/get/v1', )
usersRouter.post('/create/v1', createUserV1)

export default usersRouter