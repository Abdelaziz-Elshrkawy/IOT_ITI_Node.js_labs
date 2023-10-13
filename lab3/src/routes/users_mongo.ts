import { Request, Response, Router } from "express";
import { addUser, getUsers } from "../services/mongodb";
import { User } from "../types/typeUser";

export const mongoUsers: Router = Router();

mongoUsers.get("/:id?", async (req: Request, res: Response): Promise<void> => {
  getUsers(req.params.id).then((data) => {
    res.json(data);
  });
});
mongoUsers.post("/", async (req: Request, res: Response): Promise<void> => {
  const { username, age, password } = req.body;
  const user: User = {
    username,
    password,
    age,
  };
  addUser(user)
    .then(() => {
      res.json({ response: "Done" });
    })
    .catch((err) => {
      res.send(err);
    });
});
