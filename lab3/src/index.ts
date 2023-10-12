import express, { Express, Request, Response } from "express";
// import { users } from "./routes/users";
// import { login } from "./routes/login";
import { mongoUsers } from "./routes/users_mongo";
import dotenv from "dotenv";

dotenv.config();

export const port = process.env.port;
const app: Express = express();

app.get("/", async (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(express.json());

// app.use("/user", users);
// app.use("/login", login);
app.use("/mongouser", mongoUsers);

app.listen(port, () => {
  console.log(`Running on: http://127.0.0.1:${port}`);
});
