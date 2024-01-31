import mongoose, { Schema, Document } from 'mongoose'
import { IPUC } from "@app/models/PQPUCModel";

export interface IPUCShema extends IPUC, Document {}

const PUCSchema : Schema = new Schema({
    class: { type: String, require: true},
    description: { type: String, require: true},
    groups: [{
        name: String,
        code: String,
        accounts: [{
            code: String,
            name: String,
            subAccounts : [{
                name: String, 
                code: String
            }]
        }]
    }]
})  

export default mongoose.model<IPUCShema>('PQ_Standars_PUC', PUCSchema)