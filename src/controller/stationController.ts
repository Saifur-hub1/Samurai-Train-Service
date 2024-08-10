/**
 * Date: 08/09/2024
 * Time: 9:16:12 PM
 * Copyright (C) 2024-2025 Saifur Rahman
 */

import { Request, Response, NextFunction } from 'express';
import stationAuthService from '../service/stationAuthService.js';
import station from '../service/station.js';
const { addNewStation } = stationAuthService;
const { findStations } = station;
const addStation = async (req: Request, res: Response, next: NextFunction) => {
  const { station_id, station_name, longitude, latitude }: stationProperties = req.body;
  
  try {
    const station = await addNewStation({ station_id, station_name, longitude, latitude });
    return res.status(201).json(station);
  } catch (e) {
    next(e);
  }
}

const stationList = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const Stations = await findStations();
    res.status(200).json(Stations);
  } catch (e) {
    next(e);
  }
}

export default { addStation, stationList };