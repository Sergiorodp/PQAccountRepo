import mongoose, { Schema, Document } from 'mongoose'
import { PQUser } from "@app/models/PQUserModel";

export interface IUserSchema extends PQUser, Document {}

const UserSchema : Schema = new Schema({
    userName: { type: String, require: true, lowercase: true},
    name: { type: String, require: true, uppercase: true},
    password: { type: String, require: true},
    email: { type: String, require: true, unique: true },
    MFA: { type: Boolean, default: false}
})

export default mongoose.model<IUserSchema>('PQ_Users_DB', UserSchema)