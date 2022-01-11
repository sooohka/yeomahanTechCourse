import mysql from "mysql2/promise";
import UserService from "../src/services/user.service";

describe("test", () => {
  const user1 = { name: "sooho", email: "test@test.com" };
  const user2 = { name: "sooho1", email: "test1@test.com" };
  beforeEach(async () => {
    const db = await mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
    });

    try {
      const dropQuery = `DROP DATABASE IF EXISTS ${process.env.DB_NAME};`;
      const createQuery = `CREATE DATABASE ${process.env.DB_NAME};`;
      const useQuery = `USE ${process.env.DB_NAME};`;
      const createTableQuery = `CREATE TABLE users(name varchar(10), email varchar(63) UNIQUE KEY,createdAt datetime, deletedAt datetime, updatedAt datetime,id int(10) NOT NULL PRIMARY KEY UNIQUE KEY AUTO_INCREMENT);`;
      await db.query(dropQuery);
      await db.query(createQuery);
      await db.query(useQuery);
      await db.query(createTableQuery);
    } catch (err) {
      console.error(err);
    }
  });

  it("create user name hi should succeed", async () => {
    const result = await UserService.createUser(user1.name, user1.email);
    expect(result.result).toBeTruthy();
  });

  it("use duplicated email to create user should fail", async () => {
    await UserService.createUser(user1.name, user1.email);
    const result = await UserService.createUser(user1.name, user1.email);
    expect(result.result).toBeFalsy();
  });
});
