import mongoose, { Schema, Document } from 'mongoose'
import { PQUser } from "@app/models/PQUserModel";

export interface IUserShema extends PQUser, Document {}

const UserShema : Schema = new Schema({
    userName: { type: String, require: true},
    name: { type: String, require: true},
    password: { type: String, require: true},
    email: { type: String, require: true },
    MFA: { type: Boolean, default: false}
})

export default mongoose.model<IUserShema>('PQ_Users_DB', UserShema)