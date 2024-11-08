# Connection（数据库连接对象）

## 怎么做

### 作用及应用场景

#### 1.执行sql的对象

Statement    createStatement（）

PrepareStatement prepareStatement（String url）

#### 2.管理事务

开启事务

void	setAutoCommit（boolean autoCommit）：设置参数为false，即开启事务。

提交事务

commit（）

回滚事务

rollback（）



## 为什么