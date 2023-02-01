import {createPool} from "mysql2";
import dotenv from "dotenv";

dotenv.config();

export const pool = new createPool({
   host: process.env.HOST_DB,
   port: process.env.PORT_DB,
   user: process.env.USER_DB,
   password: process.env.PASSWORD_DB,
   database: process.env.NAME_DB
});