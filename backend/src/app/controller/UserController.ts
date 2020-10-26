import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../models/User";

class UserController {
  async index(req: Request, res: Response) {
    const users = await getRepository(User).find();
    return res.json(users);
  }

  async store(req: Request, res: Response) {
    const repository = getRepository(User);
    const { firstName, lastName, email, password } = req.body;
    const userExists = await repository.findOne({ where: { email } });

    if (userExists) {
      return res.sendStatus(409);
    }

    const user = repository.create({ firstName, lastName, email, password });
    await repository.save(user);

    return res.status(200).json(user);
  }
}

export default new UserController();
