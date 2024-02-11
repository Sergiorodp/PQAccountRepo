import { MongoPUCRepository as pucRepository } from "./mongoDB/CRUD/PQ_CRUD_PUC";
import { PUC } from "@app/models/PQPUCModel";

//#region ADD PUC ACCOUNT
function addPUCAccount( PUC : PUC): void{
    pucRepository.getInstance().insert(PUC)
}
//#endregion

//#region GET PUC BY ID
function getById( id : string){
    pucRepository.getInstance().getById(id)
}   
//#endregion

export default {
    addPUCAccount,
    getById
}