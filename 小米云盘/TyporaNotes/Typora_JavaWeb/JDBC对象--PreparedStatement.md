# PreparedSStatement：执行sql的对象

## 怎么用

### 步骤

1.导入驱动jar包

2.注册驱动

3.获取数据库连接对象connection

4.定义sql语句

PS：sql语句使用？作为占位符。

5.获取执行sql语句的对象PreparedStatment

6.给PrepareStatement对象中的？占位符赋值

​     方法：setxxx（参数1，参数2）

第一个参数：？的位置，从1开始

第二个参数：？的值

7.不需要传递sql语句，执行sql，接受返回结果

8.处理结果

9.释放资源





## 为什么

### 目的

解决sql注入问题。在拼接sql时，有一些sql的特殊关键字参与字符串的拼接，会造成安全性问题。

### 优点

效率比Statement更高

## 相关知识点

预编译的sql：参数使用？作为占位符