import joi from "joi";

export const signInSchema = joi.object({
  email: joi.string().min(5).max(50).required(),
  cpf: joi.number().min(11).max(12).required(),
  password: joi.string().min(3).max(20).required(),
});
