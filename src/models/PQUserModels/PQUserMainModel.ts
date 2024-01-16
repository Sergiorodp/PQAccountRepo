import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    userName: string
}

const UserShema : Schema = new Schema({
    usernName: { type: String, require: true}
})

export default mongoose.model<IUser>('User', UserShema)