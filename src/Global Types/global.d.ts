type userProperties = {
  user_id: number;
  user_name: string;
  password: string;
  balance: number;
}

type stationProperties = {
  station_id: number,
  station_name: string,
  longitude: number,
  latitude: number
}

interface trainProperties {
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
