import { Router } from "express";
import { schemaValidation } from "../middlewares/schemaValidation";
import { signInSchema } from "../models/auth.schemas";
import { customerSignUp } from "@/controllers/auth.controller";

const authRouter = Router();

authRouter.post("/sign-up", schemaValidation(signInSchema), customerSignUp);

export default authRouter;
