import { MongoPUCRepository as pucRepository } from './mongoDB/CRUD/PQ_CRUD_PUC'
import { type PUC } from '@app/models/PQPUCModel'

// #region ADD PUC ACCOUNT
function addAuditServiceRecord (PUC: PUC): void {
  pucRepository.getInstance().insert(PUC)
    .then(() => {})
    .catch(() => {})
}
// #endregion

export default {
  addAuditServiceRecord
}
