import express, { Express, Request, Response } from "express";
import { port } from "./services/env";
import { users } from "./routes/users";
import { login } from "./routes/login";

const app: Express = express();

app.get("/", async (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use('/user',users);
app.use('/login',login);

app.listen(port, () => {
  console.log(`Running on: http://127.0.0.1:${port}`);
});
