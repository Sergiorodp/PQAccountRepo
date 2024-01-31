import { IPUC } from "@app/models/PQPUCModel";
import pucRepository from "@app/dataBase/PQPUCRepository";

// #region CREATE PUC ACCOUNT
function addPUCAccount(PUC : IPUC): void{
    pucRepository.addPUCAccount( PUC )
}
// #endregion

export default {
    addPUCAccount
}