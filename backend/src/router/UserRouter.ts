import { Router, Request, Response } from "express";
import UserController from "../app/controller/UserController";
import AuthController from "../app/controller/AuthController";
import authMiddleware from "../app/middlewares/authMiddleware";

const router = Router();

//Auth
router.post("/auth", AuthController.authenticate);
router.post("/users", UserController.store);

router.get("/users", authMiddleware, UserController.index);

export default router;
