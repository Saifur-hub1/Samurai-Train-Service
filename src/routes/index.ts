import { Router } from "express";
import userRoutes from './userRoute.js'

const router = Router();

router.use('/api/v1/user', userRoutes);

export default router;