class UserQuery {
  static table = "users";

  static create(name: string, email: string, createdAt: string) {
    return `INSERT INTO ${UserQuery.table}(name,email,createdAt) VALUES('${name}', '${email}', '${createdAt}')`;
  }

  static read(id: number) {
    return `SELECT * FROM users WHERE id=${id}`;
  }

  static update(id: number, updatedAt: string, name?: string) {
    if (name)
      return `UPDATE ${UserQuery.table} SET name='${name}',updatedAt='${updatedAt}' WHERE id=${id}`;
    return `UPDATE ${UserQuery.table} SET updatedAt='${updatedAt}' WHERE id=${id}`;
  }

  static delete(id: number) {
    return `DELETE FROM ${UserQuery.table} WHERE id=${id}`;
  }

  static getAllUsers() {
    return `SELECT * FROM ${UserQuery.table}`;
  }
}
export default UserQuery;
