import { Document, model, Schema } from 'mongoose';

export interface Station extends Document {
  station_id: number,
  station_name: string,
  longitude: number,
  latitude: number
}

const stationSchema = new Schema<Station>({
  station_id: {
    type: Number,
    required: true,
    unique: true
  },
  station_name: {
    type: String,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  }
})

const stationModel = model<Station>('Station', stationSchema);

export default stationModel;