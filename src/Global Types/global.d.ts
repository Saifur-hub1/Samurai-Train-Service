import { Document } from "mongoose";

declare global {
  interface userProperties extends Document {
    user_id: number,
    user_name: string,
    password: string,
    balance: number
  }

  type stationIdType = string
  type DateType = string | null;
  type wallet_id_Type = userProperties['user_id'];
  interface Wallet {
    wallet_id: wallet_id_Type,
    balance: userProperties['balance'],
    wallet_user: {
      user_id: userProperties['user_id'],
      user_name: userProperties['user_name']
    }
  }
  interface addWallet {
    recharge: number
  }

  interface stationProperties {
    station_id: stationIdType,
    station_name: string,
    longitude: number,
    latitude: number
  }

  type Stops = {
    station_id: stationIdType,
    arrival_time: DateType,
    departure_time: DateType,
    fare: number
  };

  interface trainProperties extends Document{
    train_id: number,
    train_name: string,
    capacity: number,
    stops: Stops[]
  }

  type Train = {
    train_id: number,
    arrival_time: DateType,
    departure_time: DateType
  }
  interface trainList {
    station_id: stationIdType,
    trains: Train[]
  }

}