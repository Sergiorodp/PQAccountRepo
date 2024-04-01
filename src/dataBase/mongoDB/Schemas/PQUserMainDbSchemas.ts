import mongoose, { Schema, type Document } from 'mongoose'
import { type TPQUserRequest, type IPQUserResponse } from '@app/models/PQUserModel'

export interface IUserRequestSchema extends TPQUserRequest, Document {}
export interface IUserResponseSchema extends IPQUserResponse, Document {}

const UserSchema: Schema = new Schema({
  userName: { type: String, require: true, lowercase: true },
  name: { type: String, require: true, uppercase: true },
  password: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  role: { type: String, require: true },
  MFA: { type: Boolean, default: false }
})

export default mongoose.model<IUserRequestSchema>('PQ_Users_DB', UserSchema)
