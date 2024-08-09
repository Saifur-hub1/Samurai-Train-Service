import { Router } from "express";
import userRoutes from './userRoute.js'
import stationRoute from './stationRoute.js';

const router = Router();

router.use('/api/v1/users', userRoutes); // TODO: will add a middleware for authentication as it will be a private endpoint
router.use('/api/v1/stations', stationRoute); // TODO: will add a middleware for authentication as it will be a private endpoint


export default router;