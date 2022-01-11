import { MysqlError } from "mysql";
import { ResultSetHeader } from "mysql2";
import { UserDataPacket } from "../@types/user";
import { db } from "../config";
import date from "../utils/date";

const userQuery = {
  table: "users",

  create(name: string, email: string, createdAt: string) {
    return `INSERT INTO ${this.table}(name,email,createdAt) VALUES('${name}', '${email}', '${createdAt}')`;
  },

  read(id: number) {
    return `SELECT * FROM users WHERE id=${id}`;
  },

  update(id: number, updatedAt: string, name?: string) {
    if (name)
      return `UPDATE ${this.table} SET name='${name}',updatedAt='${updatedAt}' WHERE id=${id}`;
    return `UPDATE ${this.table} SET updatedAt='${updatedAt}' WHERE id=${id}`;
  },
  delete(id: number) {
    return `DELETE FROM ${this.table} WHERE id=${id}`;
  },

  getAllUsers() {
    return `SELECT * FROM ${this.table}`;
  },
};

class UserService {
  static async createUser(name: string, email: string) {
    try {
      const connection = await db.getConnection();
      try {
        const createdAt = date.getMysqlDate();
        const query = userQuery.create(name, email, createdAt);
        const [row] = await connection.query<ResultSetHeader>(query);
        if (row.affectedRows !== 1)
          return { message: "something went wrong", result: false };
        return { message: "success", result: true };
      } catch (err: unknown) {
        const error: MysqlError = err as MysqlError;
        if (error.errno === 1062)
          return { message: "Email Duplicated", result: false };
        throw err;
      } finally {
        connection.release();
      }
    } catch (err) {
      throw err;
    }
  }

  static async readUser(id: number) {
    const query = userQuery.read(id);
    try {
      const connection = await db.getConnection();
      try {
        const [row] = await connection.query<UserDataPacket[]>(query);
        if (row.length !== 1)
          return { message: "User not exists", result: false };
        return { message: "success", result: true, data: row[0] };
      } catch (err) {
        throw err;
      } finally {
        connection.release();
      }
    } catch (err) {
      throw err;
    }
  }

  static async updateUser(id: number, name?: string) {
    try {
      const connection = await db.getConnection();
      try {
        const updatedAt = date.getMysqlDate();
        const query = userQuery.update(id, updatedAt, name);
        const [row] = await connection.query<ResultSetHeader>(query);
        if (row.affectedRows < 1)
          return { message: "User not exists", result: false };
        return { message: "success", result: true };
      } catch (err) {
        throw err;
      } finally {
        connection.release();
      }
    } catch (err) {
      throw err;
    }
  }

  static async deleteUser(id: number) {
    try {
      const connection = await db.getConnection();
      try {
        const query = userQuery.delete(id);
        const [row] = await connection.query<ResultSetHeader>(query);
        if (row.affectedRows < 1)
          return { message: "User not exists", result: false };
        return { message: "success", result: true };
      } catch (err) {
        throw err;
      } finally {
        connection.release();
      }
    } catch (err) {
      throw err;
    }
  }

  static async getAllUsers() {
    try {
      const connection = await db.getConnection();
      try {
        const query = userQuery.getAllUsers();
        const [row] = await connection.query<UserDataPacket[]>(query);
        return row;
      } catch (err) {
        throw err;
      } finally {
        connection.release();
      }
    } catch (err) {
      throw err;
    }
  }
}
export default UserService;
