import puc from '@app/utils/PUC/puc.json'

import { Request, Response } from "express"

//#region GET PUC BY CODE
function getPucByCode(req: Request, res: Response){
    const {code = ''} = req.body
    res.send(puc.filter( p => {
        return p.Codigo.startsWith(code)
    }))
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
    getPucByCode,
    healthCheck
}