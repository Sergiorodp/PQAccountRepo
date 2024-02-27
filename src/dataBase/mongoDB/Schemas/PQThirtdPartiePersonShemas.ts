import mongoose, { Schema, Document } from 'mongoose'
import { PQThirdPartiePerson } from "@app/models/PQThirdPartieModel";

export interface IThirrdPartiePersonShema extends PQThirdPartiePerson, Document {}

const ThirdPartieUsershema : Schema = new Schema({
    idType: { type: String, require: true},
    idNum: { type: String, require: true},
    firstLastName: { type: String, require: false, default: ''},
    secondLastName: { type: String, require: false, default: ''},
    firstName: { type: String, require: true},
    secondName: { type: String, require: false, default: ''},
    entryDate: { type: Date, default: Date.now },
    phone: { type: String, require: true},
    address: { type: String, require: true},
    email: { type: String, require: true},
    economicActivity: { type: String, require: true },
    municipalityCode: { type: Number, require: true },
    contractType: { type: String, require: true },
    educationLevel: { type: String, require: true },
    stratum: { type: String, require: true },
    incomeLevel: { type: String, require: true },
    birthDate: { type: Date, default: undefined},    
    occupation: { type: String, require: true },
    workDay:{ type: Number, require: false },
    withdrawalDate: { type: Date, default: undefined },
    lastAssemblyAttended: { type: Boolean, default: false},
})

export default mongoose.model<IThirrdPartiePersonShema>('PQ_ThirdPartiePerson_DB', ThirdPartieUsershema)