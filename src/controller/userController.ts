import e, { Request, Response, NextFunction } from "express"
import authService from "../service/authService.js";
import error from "../utils/error.js";

const { registerService } = authService;

const postUsers = async (req: Request, res: Response, next: NextFunction) => {
  const { user_id, user_name, password, balance } = req.body;
  try {
    const user = await registerService({ user_id, user_name, password, balance });
    return res.json(user);
  } catch(e) {
    next(e);
  }
}

export default {
  postUsers
}