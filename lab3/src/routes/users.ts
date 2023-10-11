import { Request, Response, Router } from "express";
import { databaseConnection } from "../services/db";

export const users: Router = Router();

users.get("/", async (req: Request, res: Response): Promise<void> => {
  databaseConnection().query(
    `select * from users`,
    (err: Error, results: []) => {
      if (err) throw err;
      res.json(results);
    }
  );
});
users.get("/:id", async (req: Request, res: Response): Promise<void> => {
  databaseConnection().query(
    `select * from users where id = ${req.params.id}`,
    (err: Error, results: []) => {
      if (err) throw err;
      if (results.length > 0) res.json(results);
      else res.status(204).json({ response: "user not found" });
    }
  );
});
users.post("/", async (req: Request, res: Response): Promise<void> => {
  const { name, password, age } = req.body;
  databaseConnection().query(
    `insert into users (name, password, age) values ('${name}', '${password}', '${age}')`,
    (err: Error) => {
      if (err) throw err;
      res.json({ response: "user added successfully" });
    }
  );
});
