import {createConnection, Connection} from "mysql2";
import { mysqlPswd } from "./env";

const connection: Connection = createConnection({
  host: "127.0.0.1",
  user: "root",
  password: mysqlPswd,
    database: "test",
    connectTimeout: 200
});

export function databaseConnection(): Connection{
    connection.connect((err) => {
        if (err) console.log(err)
        console.log('Query Done Successfully')
    })
    return connection
}
