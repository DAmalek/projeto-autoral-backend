import authService from "@/services/auth.service";
import { Response, Request } from "express";
import httpStatus from "http-status";

export async function customerSignUp(req: Request, res: Response) {
  const { email, cpf, password } = req.body;

  try {
    const result = await authService.signUp(email, cpf, password);

    res.status(httpStatus.CREATED).send("created");
  } catch (error) {}
}
