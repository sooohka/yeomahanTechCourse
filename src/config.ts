import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();
const envFile = process.env;

const env = {
  database: {
    host: envFile.DB_HOST,
    user: envFile.DB_USER,
    password: envFile.DB_PASSWORD,
    name: envFile.DB_NAME,
    port: parseInt(envFile.DB_PORT!, 10),
  },
};

const db = mysql.createPool({
  host: env.database.host,
  user: env.database.user,
  password: env.database.password,
  database: env.database.name,
  port: env.database.port,
});

export { db };
export default env;
