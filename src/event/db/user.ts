import { db } from "../../config";
import date from "../../utils/date";
import Query from "./query";

class UserEvent {
  static async createUser(name: string, email: string) {
    try {
      const connection = await db.getConnection();
      try {
        const createdAt = date.getMysqlDate();
        const query = Query.user.create(name, email, createdAt);
        const [row] = await connection.query(query);
        console.log(row);
        return row;
      } catch (err) {
        console.log(err);
        throw err;
      } finally {
        connection.release();
      }
    } catch (err) {
      console.log(err);

      throw err;
    }
  }

  static async readUser(id: number) {
    const query = Query.user.read(id);
    try {
      const connection = await db.getConnection();
      try {
        const [row] = await connection.query(query);
        return row;
      } catch (err) {
        console.error("fail sending query");
        throw err;
      } finally {
        connection.release();
      }
    } catch (err) {
      console.error("fail getting db connection");
      throw err;
    }
  }

  static async updateUser(id: number, name?: string) {
    try {
      const connection = await db.getConnection();
      try {
        const updatedAt = date.getMysqlDate();
        const query = Query.user.update(id, updatedAt, name);
        const [row] = await connection.query(query);
        return row;
      } catch (err) {
        console.error(err);
        throw err;
      } finally {
        connection.release();
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  static async deleteUser(id: number) {
    try {
      const connection = await db.getConnection();
      try {
        const query = Query.user.delete(id);
        const [row] = await connection.query(query);
        return row;
      } catch (err) {
        console.error(err);
        throw err;
      } finally {
        connection.release();
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  static async getAllUsers() {
    try {
      const connection = await db.getConnection();
      try {
        const query = Query.user.getAllUsers();
        const [row] = await connection.query(query);
        return row;
      } catch (err) {
        console.error(err);
        throw err;
      } finally {
        connection.release();
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}
export default UserEvent;
