import { MongoPUCRepository as pucRepository } from "./mongoDB/CRUD/PQ_CRUD_PUC";
import { IPUC } from "@app/models/PQPUCModel";

//#region ADD PUC ACCOUNT
function addPUCAccount( PUC : IPUC): void{
    pucRepository.getInstance().insert(PUC)
}
//#endregion

//#region GET PUC BY ID
function getById(){

}   
//#endregion

export default {
    addPUCAccount,
    getById
}