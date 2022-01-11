import { Request, Response } from "express";
import {} from "mysql2";
import UserService from "../services/user.service";

class UserController {
  static async create(req: Request, res: Response) {
    const { name, email } = req.body;
    try {
      const result = await UserService.createUser(name, email);
      if (result.result) res.status(201);
      else res.status(404).json(result);
    } catch (err) {
      // TODO: 에러헨들링
      res.status(400).json(err);
    } finally {
      res.end();
    }
  }

  static async read(req: Request, res: Response) {
    const { id } = req.query;

    try {
      const result = await UserService.readUser(Number(id));
      if (result.result) res.status(200).json(result.data);
      else res.status(404).json(result);
    } catch (err) {
      // TODO: 에러헨들링
      res.status(400).json(err);
    } finally {
      res.end();
    }
  }

  static async update(req: Request, res: Response) {
    const { name, id } = req.body;
    try {
      const result = await UserService.updateUser(id, name);
      if (result.result) res.status(204);
      else res.status(404).json(result);
    } catch (err) {
      // TODO: 에러헨들링
      res.status(400).json(err);
    } finally {
      res.end();
    }
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.query;
    try {
      const result = await UserService.deleteUser(Number(id));
      if (result.result) res.status(204);
      else res.status(404).json(result);
    } catch (err) {
      // TODO: 에러헨들링
      res.status(400).json(err);
    } finally {
      res.end();
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const result = await UserService.getAllUsers();
      res.status(200).json(result);
    } catch (err) {
      // TODO: 에러헨들링
      res.status(400).json(err);
    } finally {
      res.end();
    }
  }
}

export default UserController;
