import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Response, Request } from "express";
import { connectDB, disconnectDB } from "./config/database";
import authRouter from "./routes/auth.routes";

const app = express();

app
  .use(cors())
  .use(express.json())
  .use(authRouter)
  .get("/health", (req: Request, res: Response) => res.send("OK!"));

export function init(): Promise<Express> {
  connectDB;
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
