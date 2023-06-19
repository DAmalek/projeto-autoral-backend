import express from "express";
import cors from "cors";

const app = express();

app
  .use(cors())
  .use(express.json())
  .get("/health", () => res.send("OK!"));

app.listen(4000, () => console.log("rodando..."));
