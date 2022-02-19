import express, { Router } from "express";
import userController from "../controller/user";

const router: Router = express.Router();

router.post("/get", userController.getUser)

router.get("/list", userController.userList)

export default router;