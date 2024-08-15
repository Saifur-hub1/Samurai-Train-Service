import { Document, model, Schema } from 'mongoose';

export interface User extends Document{
  user_id: number,
  user_name: string,
  password: string
  balance: number
}

const userSchema = new Schema<User>({
  user_id: {
    type: Number,
    required: true,
    unique: true
  },
  password: {
    type: String,
    // required: true,
  },
  user_name: {
    type: String,
    required: true,
    unique: true
  },
  balance: {
    type: Number,
    required: true
  }
})

const User= model<User>('User', userSchema);

export default User;