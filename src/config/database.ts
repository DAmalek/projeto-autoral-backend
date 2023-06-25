import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

prisma = new PrismaClient();

export function connectDB(): void {
  prisma = new PrismaClient();
}

export async function disconnectDB(): Promise<void> {
  await prisma?.$disconnect();
}
export default prisma;
