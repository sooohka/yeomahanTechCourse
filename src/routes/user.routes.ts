import { Router } from "express";
import UserController from "../controller/user.controller";

const userRouter = Router();
userRouter.post("/create", UserController.create);
userRouter.get("/read", UserController.read);
userRouter.put("/update", UserController.update);
userRouter.delete("/delete", UserController.delete);
userRouter.get("/all", UserController.getAll);

export default userRouter;
