/**
 * Date: 09/08/2024
 * Time: 9:16:12 PM
 * Copyright (C) 2024-2025 Saifur Rahman
 */

import { Router } from "express";
import userController from "../controller/userController.js";

const router = Router();
const { postUsers } = userController;
router.post('/', postUsers);

export default router;