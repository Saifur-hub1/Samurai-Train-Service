/**
 * Date: 10/08/2024
 * Time: 2:30:00 PM
 * Copyright (C) 2024-2025 Saifur Rahman
 */

import { Router } from "express";
import trainRouteController from "../controller/trainRouteController.js";

const { postTrain, getTrainByStationid } = trainRouteController;
const router = Router();

router.post('/', postTrain);
router.get(`/stations/:station_id/trains`, getTrainByStationid)

export default router;
