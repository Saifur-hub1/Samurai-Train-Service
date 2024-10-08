/**
 * Date: 09/08/2024
 * Time: 9:16:12 PM
 * Copyright (C) 2024-2025 Saifur Rahman
 */

import e, { Request, Response, NextFunction } from "express"
import authService from "../service/authService.js";
import error from "../utils/error.js";

const { registerService } = authService;

const postUsers = async (req: Request, res: Response, next: NextFunction) => {
  const User: userProperties = req.body;
  try {
    const user = await registerService(User);
    return res.status(201).json(user);
  } catch(e) {
    next(e);
  }
}

export default {
  postUsers
}