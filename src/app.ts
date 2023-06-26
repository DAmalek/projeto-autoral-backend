import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Response, Request } from "express";

import authRouter from "./routes/auth.routes";
import { handleApplicationErrors } from "./middlewares/error.middleware";

const app = express();

app
  .use(cors())
  .use(express.json())
  .use(authRouter)
  .get("/health", (req: Request, res: Response) => res.send("OK!"))
  .use(handleApplicationErrors);

export default app;
