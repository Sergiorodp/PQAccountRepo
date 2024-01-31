import mongoose, { Schema, Document } from 'mongoose'
import { IUser } from "@app/models/PQUserMainModel";

export interface IUserShema extends IUser, Document {}

const UserShema : Schema = new Schema({
    usernName: { type: String, require: true}
})

export default mongoose.model<IUserShema>('User', UserShema)