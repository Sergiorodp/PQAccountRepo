import mongoose, { Schema, type Document } from 'mongoose'
import { type TPQCreateUserRequest, type TPQUserResponse } from '@app/models/PQUserModel'

export interface IUserRequestSchema extends TPQCreateUserRequest, Document {}
export interface IUserResponseSchema extends TPQUserResponse, Document {}

const UserSchema: Schema = new Schema({
  userName: { type: String, require: true, lowercase: true },
  name: { type: String, require: true, uppercase: true },
  password: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  MFA: { type: Boolean, default: false }
})

export default mongoose.model<IUserRequestSchema>('PQ_Users_DB', UserSchema)
