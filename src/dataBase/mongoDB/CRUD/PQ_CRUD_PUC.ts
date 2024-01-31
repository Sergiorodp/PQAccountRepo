import { IPUC } from "@app/models/PQPUCModel";
import PUCConection from "../Schemas/Standars/PQPucDbSchemas";

// #region CREATE
const Insert = ( PUC : IPUC ) => {
    PUCConection.insertMany([PUC])
    .then( () => {
        console.log("new shema")
    })
    .catch(() => {
        console.error("error load schema")
    })
}
// #endregion

export default {
    Insert
}