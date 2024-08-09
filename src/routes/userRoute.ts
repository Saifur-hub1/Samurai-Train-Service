import { Router } from "express";
import userController from "../controller/userController.js";

const router = Router();
const { postUsers } = userController;
router.post('/', postUsers);

export default router;