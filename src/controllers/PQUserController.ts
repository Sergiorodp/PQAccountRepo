import { Router, Request, Response} from "express";

import { createUser } from '@app/business/PQUsersBusiness'

const router = Router()

console.log(`[[ USERS ]]`)

function createUserV1(req : Request, res : Response){
    if(req.body){
        res.send(createUser(req))
    }else{
        res.status(400).send({
            value: 'transacción no procesada, no se encontro el body'
        })
    }
}

router.get('/getUser/v1', )
router.post('/createUser/v1', createUserV1)

export default router