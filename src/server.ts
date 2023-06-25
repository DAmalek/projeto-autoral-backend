import app from "./app";
import "dotenv/config";

const port = process.env.PORT || 4000;

app.listen(port, () =>
  console.log(`server online... rodando na porta ${port}!`)
);
