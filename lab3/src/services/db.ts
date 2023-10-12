import { createConnection, Connection } from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const mysqlPswd = process.env.mysql_pswd;

export function databaseConnection(): Connection {
  const connection: Connection = createConnection({
    host: "127.0.0.1",
    user: "root",
    password: mysqlPswd,
    database: "test",
    connectTimeout: 200,
  });
  connection.connect((err) => {
    if (err) console.log(err);
    console.log("Query Done Successfully");
  });
  return connection;
}
