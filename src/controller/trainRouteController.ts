/**
 * Date: 10/08/2024
 * Time: 10:01:02 AM
 * Copyright (C) 2024-2025 Saifur Rahman
 */

import { Request, Response, NextFunction } from 'express';
import train from '../service/trainAuthService.js'
import trainService from '../service/train.js'

const { calculateStops, findTrainAtStation } = trainService;
const { registerTrain } = train;

const postTrain = async (req: Request, res: Response, next: NextFunction) => {
  const { train_id, train_name, capacity, stops }: trainProperties = req.body;
  
  try {
    await registerTrain({ train_id, train_name, capacity, stops });
    const train = {
      train_id,
      train_name,
      capacity,
      ...calculateStops(stops),
      num_stations: stops.length
    }
    res.status(201).json(train);
  } catch (e) {
    next(e);
  }
}

const getTrainByStationid = async (req: Request, res: Response, next: NextFunction) => {
  const station_id: string = (req.params.station_id);
  const trainList = await findTrainAtStation(station_id);
  console.log(station_id)
  // const d = JSON.stringify(trainList);
  res.status(200).send(trainList);
}

export default {
  postTrain,
  getTrainByStationid
};