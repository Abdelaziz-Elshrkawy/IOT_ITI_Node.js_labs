import { Request, Response, Router } from "express";
import { databaseConnection } from "../services/db";


export const login: Router = Router()

login.get('/', async (req: Request, res: Response) => {
    const { name, password } = req.body;
    databaseConnection().query(
      `select * from users where name='${name}' and password='${password}'`,
      (err: Error, results: []) => {
        if (err) throw err;
        if (results.length > 0) {
          res.json(results);
        } else {
            res.status(401).json({response: 'invalid username or password'})
        }
      }
    );
})

