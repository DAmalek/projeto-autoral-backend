import { conflictError } from "@/errors/conflict-error";
import authRepository from "@/repositories/auth.repository";
import bcrypt from "bcrypt";
import { Response, Request, NextFunction } from "express";

async function signUp(email: string, cpf: number, password: string) {
  const checkEmail = await authRepository.findEmail(email);
  if (!checkEmail) {
    throw conflictError("email exists");
  }

  const hashPassword: string = await bcrypt.hash(password, 10);
  await authRepository.createCustomerUser(email, cpf, hashPassword);
}

const authService = { signUp };

export default authService;
