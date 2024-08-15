/**
 * Date: 15/08/2024
 * Time: 7:00:00 AM
 * Copyright (C) 2024-2025 Saifur Rahman
 */

import { Router } from "express";
import walletControllers from "../controller/walletControllers.js";

const router = Router();

const { getWallet, addWallet } = walletControllers;

router.get('/:wallet_id', getWallet)
router.put('/:wallet_id', addWallet)

export default router;