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

export default {
  findTrainByProperty,
  createNewTrain,
  calculateStops
}