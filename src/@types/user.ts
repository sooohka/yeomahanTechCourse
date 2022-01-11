import { RowDataPacket } from "mysql2";

interface User {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  deletedAt: null;
  updatedAt: null;
}
type UserDataPacket = RowDataPacket & User;

export { UserDataPacket, User };
