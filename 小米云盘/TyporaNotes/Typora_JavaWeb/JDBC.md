# JDBC

## 是什么

### 定义

全名是Java DataBase Connectivity  数据库连接，JAVA语言操作数据库。本质是官方（sun公司）定义的一套操作所有关系型数据库的规则，即接口。   



## 怎么用

### 步骤

1.导入驱动jar包

2.注册驱动

3.获取数据库连接对象connection

4.定义sql语句

5.获取执行sql语句的对象   Statment

6.执行sql，接受返回结果

7.处理结果

8.释放资源



## 为什么

### 目的

用统一的一套java代码可以操作所有的关系型数据库。





## 相关的知识点

### 使用中会用到的各个对象

1.DriverManager：驱动管理对象

2.Connection：数据库连接对象

3.Statement：执行sql对象

4.ResultSet：结果集对象

5.PrepareStatement：执行sql对象，但是比Statement对象更加强大。