/**
 * Date: 09/08/2024
 * Time: 9:16:12 PM
 * Copyright (C) 2024-2025 Saifur Rahman
 */

import { Router } from "express";
import stationController from '../controller/stationController.js'

const { addStation, stationList } = stationController;
const router = Router();

router.post('/', addStation);
router.get('/', stationList)

export default router;