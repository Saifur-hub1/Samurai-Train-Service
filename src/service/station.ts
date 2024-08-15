import stationModel from "../models/Station.js"

const findStationByProperty = (key: string, value: string) => {
  if (key == '_id') {
    return stationModel.findById(value);
  }

  return stationModel.findOne({ [key]: value });
}

const createNewStation = ({ station_id, station_name, longitude, latitude }: stationProperties) => {
  const station = new stationModel({ station_id, station_name, longitude, latitude });
  return station.save();
}

const findStations = async ()=> {
  const allStation = await stationModel.find();
  const stationArrayObject: Record<string, Array<Object>> = {
    stations: allStation
  }
  return stationArrayObject;
}

export default {
  findStationByProperty,
  createNewStation,
  findStations
}