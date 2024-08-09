import { Document, model, Schema } from 'mongoose';

export interface User extends Document{
  user_id: string,
  user_name: string,
  balance: number
}

const userSchema = new Schema<User>({
  user_id: {
    type: String,
    required: true,
    unique: true
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