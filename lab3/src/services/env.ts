import dotenv from "dotenv";

dotenv.config();

export const port = process.env.port;
export const mysqlPswd = process.env.mysql_pswd