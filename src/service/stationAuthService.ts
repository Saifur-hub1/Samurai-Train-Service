/**
 * Date: 09/08/2024
 * Time: 9:16:12 PM
 * Copyright (C) 2024-2025 Saifur Rahman
 */
import error from '../utils/error.js';
import station from './station.js';
import stationService from './station.js'

const { findStationByProperty, createNewStation} = stationService;
/**
 * TODO: I see for real life scenario there must some authentication process should be. Like --
 * 1. With same name station maybe impossible in a country
 * 2. In same longitude and latitude two or more station is totally impossible
 * 
 * Note: For a simple prototype we've implemented the 'station_id' authentication
 */
const addNewStation = async ({ station_id, station_name, longitude, latitude }: stationProperties) => {
  let user = await findStationByProperty('station_id', station_id);
  if (user) {
    throw error('Station already exist', 400) // 400 status code refer, it's a bad request
  }

  return createNewStation({ station_id, station_name, longitude, latitude });
}

export default {
  addNewStation
}