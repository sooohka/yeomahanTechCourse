# 게시판 CRUD

## db구조

### users

1. id NOT NULL PK AUTO_INCREMENT
2. name
3. email NOT NULL
4. createdAt
5. deletedAt

```sql
CREATE TABLE users(id int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,name varchar(10),email varchar(20),createAt datetime, deletedAt datetime)
```

### 게시글
