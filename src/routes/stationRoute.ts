import { Router } from "express";
import stationController from '../controller/stationController.js'

const { addStation } = stationController;
const router = Router();

router.post('/', addStation);

export default router;