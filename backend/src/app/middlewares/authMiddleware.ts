import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token necessário" });
  }

  const [, token] = authHeader.split(" ");

  try {
    await jwt.verify(token, process.env.SECRET);
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido" });
  }
}

export default authMiddleware;
