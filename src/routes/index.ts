/**
 * Date: 08/08/2024
 * Time: 9:16:12 PM
 * Copyright (C) 2024-2025 Saifur Rahman
 */
//ddff
import { Router } from "express";
import userRoutes from './userRoute.js'
import stationRoute from './stationRoute.js';
import trainRoute from './trainRoute.js';
import walletRoute from './walletRouts.js'

const router = Router();

router.use('/api/v1/users', userRoutes); // TODO: will add a middleware for authentication as it will be a private endpoint
router.use('/api/v1/stations', stationRoute); // TODO: will add a middleware for authentication as it will be a private endpoint
router.use('/api/v1/trains', trainRoute); // TODO: will be a middleware for authentication as it will be a private endpoint
router.use('/api/v1/wallets', walletRoute); // TODO: will be a middleware for authentication

export default router;