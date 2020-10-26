import { Router, Request, Response } from "express";
import UserController from "../app/controller/UserController";
import AuthController from "../app/controller/AuthController";
import authMiddleware from "../app/middlewares/authMiddleware";
import cors from 'cors'
import { corsOptions } from "../config/cors";

const router = Router();

//Auth
router.post("/auth", cors(corsOptions), AuthController.authenticate);
router.post("/users", UserController.store);

router.get("/users", authMiddleware, UserController.index);

export default router;
