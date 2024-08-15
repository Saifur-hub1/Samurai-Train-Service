/**
 * Date: 10/08/2024
 * Time: 2:34:06 PM
 * Copyright (C) 2024-2025 Saifur Rahman
 */

import trainModel from "../models/Train.js";

const findTrainByProperty = (key: string, value: number) => {
  if (key == '_id') {
    return trainModel.findById(value);
  }

  return trainModel.findOne({ [key]: value });
}

const calculateStops = (stops: trainProperties['stops']) => {
  const firstStop = stops[0];
  const lastStop = stops[stops.length - 1];
  console.log(firstStop.arrival_time);
  console.log(lastStop.departure_time)
  return {
    service_start: firstStop.departure_time,
    service_end: lastStop.arrival_time
  }
}

const createNewTrain = ({train_id, train_name, capacity, stops}: trainProperties) => {
  const train = new trainModel({ train_id, train_name, capacity, stops });

  return train.save();
}

const sortFunction = <T extends Train>(trains: T[]): T[] => {
  const sortedResult: T[] = trains.sort((a, b) => {
    if (a.departure_time !== b.departure_time) {
      if (a.departure_time === null) return -1;
      if (b.departure_time === null) return 1;
      if (typeof a.departure_time === 'string' && typeof b.departure_time === 'string') {
        return a.departure_time?.localeCompare(b.departure_time);
      }
      return 0; // Fallback if not a string
    }
    if (a.arrival_time !== b.arrival_time) {
      if (a.arrival_time === null) return -1;
      if (b.arrival_time === null) return 1;
      if (typeof a.arrival_time === 'string' && typeof b.arrival_time === 'string') {
        return a.arrival_time?.localeCompare(b.arrival_time);
      }
    }

    return a.train_id - b.train_id;
  })

  return sortedResult;
}

const formatToTrainList = (result: trainProperties[], stationId: string): trainList => {
  const trains: Train[] = result.flatMap(
    train => {
      return train.stops
        .filter(stop => stop.station_id === stationId)
        .map(stop => {
          return {
            train_id: train.train_id,
            arrival_time: stop.arrival_time,
            departure_time: stop.departure_time
          }
        })
    }
  )
  const sortedList = sortFunction(trains)
  return {
    station_id: stationId,
    trains: sortedList
  };
}

const findTrainAtStation = async (stationId: string) => {
  const result: trainProperties[] = await trainModel.find({'stops.station_id': stationId});
  
  const formatedList: trainList = formatToTrainList(result, stationId)
  
  return formatedList;
}

export default {
  findTrainByProperty,
  createNewTrain,
  calculateStops,
  findTrainAtStation
}