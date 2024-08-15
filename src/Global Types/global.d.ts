type userProperties = {
  user_id: number;
  user_name: string;
  password: string;
  balance: number;
}

type stationProperties = {
  station_id: string,
  station_name: string,
  longitude: number,
  latitude: number
}

type Stops = {
  station_id: string,
  arrival_time: string | null,
  departure_time: string | null,
  fare: number
};

interface trainProperties {
  train_id: number,
  train_name: string,
  capacity: number,
  stops: Stops[]
}

type Train = {
  train_id: number,
  arrival_time: string | null,
  departure_time: string | null
}
interface trainList{
  station_id: string,
  trains: Train[]
}
