import prisma from "@/config/database";
import { Prisma, PrismaClient } from "@prisma/client";

async function findEmail(email: string) {
  return await prisma.users_customers.findUnique({
    where: { email },
  });
}

async function createCustomerUser(
  email: string,
  cpf: number,
  password: string
) {
  await prisma.users_customers.create({
    data: {
      email,
      cpf,
      password,
    },
  });
}

const authRepository = { findEmail, createCustomerUser };
export default authRepository;
