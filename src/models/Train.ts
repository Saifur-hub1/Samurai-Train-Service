import { Document, Schema, model } from 'mongoose'

export interface Train extends Document{
  train_id: number,
  train_name: string,
  capacity: number,
  stops: [
    {
      station_id: number,
      arrival_time: Date,
      departure_time: Date,
      fare: number
    }
  ]
}

const trainSchema = new Schema<Train>({
  train_id: {
    type: Number,
    required: true,
    unique: true
  },
  train_name: {
    type: String,
    required: true,
    unique: true
  },
  capacity: {
    type: Number,
    required: true
  },
  stops: Number
})

const trainModel = model<Train>('Train', trainSchema);

export default trainModel;