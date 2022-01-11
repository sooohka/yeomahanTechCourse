--@block 
CREATE TABLE users(name varchar(10), email varchar(63) UNIQUE KEY,createdAt datetime, deletedAt datetime, updatedAt datetime,id int(10) NOT NULL PRIMARY KEY UNIQUE KEY AUTO_INCREMENT)

--@block
DROP TABLE IF EXISTS users

--@BLOCK

SELECT * FROM users;

--@BLOCK

CREATE DATABASE yeomahan_test;

--@BLOCK
DROP DATABASE IF EXISTS yeomahan_test;