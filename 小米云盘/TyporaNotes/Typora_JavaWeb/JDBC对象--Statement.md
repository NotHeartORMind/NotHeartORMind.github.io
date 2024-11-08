# Statement（执行sql 的对象）

## 怎么做

### 执行sql语句

#### 1.执行任意的sql语句

boolean execute（String url）



#### 2.执行DDL、DML语句

int  executeUpdate（String url）

返回值：影响的行数，可以通过这个判断DML语句是否执行成功，如果>0，则执行成功。如果是DDL则不会返回任何东西，因此默认返回0.

#### 3.执行DQL语句

ResultSet executeQuery（String url）



## 为什么