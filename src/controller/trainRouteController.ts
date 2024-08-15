/**
 * Date: 10/08/2024
 * Time: 10:01:02 AM
 * Copyright (C) 2024-2025 Saifur Rahman
 */

import { Request, Response, NextFunction } from 'express';
import train from '../service/trainAuthService.js'
import trainService from '../service/train.js'
import station from '../service/station.js';

const { calculateStops, findTrainAtStation } = trainService;
const { registerTrain } = train;
const { findStationByProperty } = station;

const postTrain = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const Train: trainProperties = req.body;
    await registerTrain(Train);
    const train = {
      train_id: Train.train_id,
      train_name: Train.train_name,
      capacity: Train.capacity,
      ...calculateStops(Train.stops),
      num_stations: Train.stops.length
    }
    res.status(201).json(train);
  } catch (e) {
    next(e);
  }
}

const getTrainByStationid = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const station_id: stationIdType = (req.params.station_id);
    const stationExist = findStationByProperty('station_id', station_id);
    if (!stationExist) {
      res.status(404).json({ message: `Station with id: ${station_id} was not found` })
    }
    const trainList = await findTrainAtStation(station_id);
    console.log(station_id)
    res.status(200).send(trainList);
  } catch(error) {
    next(error);
  }
}

export default {
  postTrain,
  getTrainByStationid
};