# 게시판 CRUD

## Mysql Pool을 사용하는 이유

왜 일반 커넥션 말고 POOL을 사용할까?

1. DB에 연결을 요청하는 작업은 비싸다(인증, 네트워크 요청(remote인 경우) 등)
2. DB에 연결할 수 있는 client는 한정적이다. 즉 너무 많은 요청이 오면 DB에 과부하가 걸린다.(그렇다고 하나의 Connection만 사용하면 응답이 너무 늦음)

위와 같은 상황을 해결하기 위해 POOL이 등장!!

- Pool은 서버에 하나의 커넥션 풀을 생성한 다음 클라이언트에서 디비접근 요청이 올때마다 풀에 새로운 커넥션을 만들어준다
- Pool내에 여러개의 커넥션이 존재할 수 있다.
- Pool내에 커넥션 요청이 들어온 순서대로 처리된다(Queue라고 생각)
- 클라이언트의 디비 접근 요청이 끝나면 생성한 커넥션을 반환한다!

[리소스1](https://stackoverflow.com/questions/9736188/mysql-persistent-connection-vs-connection-pooling)
[리소스2](https://stackoverflow.com/questions/4041114/what-is-database-pooling)

## User Delete요청을 보냈을때 User가 존재하지 않을때에 적합한 HTTP코드는 무엇일까?

- 처음엔 DB에서 DELETE쿼리를 날릴때 ID에 해당하는 ROW가 없다고 에러를 반환하지 않기 때문에 클라이언트가 보낸 요청이 에러라고 생각하지 않았다.
- 하지만 DB에서 오류가 나지 않았다고 클라이언트의 요청 자체가 오류가 아닌것이 아니다!!
- 애매해서 stackOverFlow를 찾아본 결과 충족되지 않은 엔티티에 대해서도 404가 적용된다고 한다.

[리소스](https://stackoverflow.com/questions/5604816/whats-the-most-appropriate-http-status-code-for-an-item-not-found-error-page)

## db구조

### User

1. id NOT NULL PK AUTO_INCREMENT
2. name
3. email NOT NULL
4. createdAt
5. deletedAt

```sql
DROP TABLE IF EXISTS users;
CREATE TABLE users(id int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,name varchar(10),email varchar(63) UNIQUE KEY,createdAt datetime, deletedAt datetime, updatedAt datetime);
```

### 게시글
