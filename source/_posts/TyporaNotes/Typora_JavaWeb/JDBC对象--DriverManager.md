---

title: JDBC对象--DriverManager

date: 

updated: 

categories: JavaWeb

tags: 

keywords: 

---
# DriverManager（驱动管理对象）

## 怎么做

### 作用与应用场景

#### 1.注册驱动        

写代码：  Class.forName(“com.mysql.jdbc.Driver”);

即使不写代码，软件也会通过相关文件进行自动注册。



#### 2.获取数据库连接

static Connection getConnection（String  url，String user，String password）

url：指定连接的路径。    

语法：jdbc：mysql：//ip地址（域名）：端口号/数据库名称

PS：如果连接的是本机mysql服务器，并且端口号是3306，则url可以简写成jdbc：mysql：///数据库名称

user：用户名

password ：密码



## 为什么

### 注册驱动的目的

 告诉程序应该使用哪一个数据库驱动包。

## 怎么做

### 作用与应用场景

#### 1.注册驱动        

写代码：  Class.forName(“com.mysql.jdbc.Driver”);

即使不写代码，软件也会通过相关文件进行自动注册。



#### 2.获取数据库连接

static Connection getConnection（String  url，String user，String password）

url：指定连接的路径。    

语法：jdbc：mysql：//ip地址（域名）：端口号/数据库名称

PS：如果连接的是本机mysql服务器，并且端口号是3306，则url可以简写成jdbc：mysql：///数据库名称

user：用户名

password ：密码



## 为什么

### 注册驱动的目的

 告诉程序应该使用哪一个数据库驱动包。象）

## 怎么做

### 作用与应用场景

#### 1.注册驱动        

写代码：  Class.forName(“com.mysql.jdbc.Driver”);

即使不写代码，软件也会通过相关文件进行自动注册。



#### 2.获取数据库连接

static Connection getConnection（String  url，String user，String password）

url：指定连接的路径。    

语法：jdbc：mysql：//ip地址（域名）：端口号/数据库名称

PS：如果连接的是本机mysql服务器，并且端口号是3306，则url可以简写成jdbc：mysql：///数据库名称

user：用户名

password ：密码



## 为什么

### 注册驱动的目的

 告诉程序应该使用哪一个数据库驱动包。

## 怎么做

### 作用与应用场景

#### 1.注册驱动        

写代码：  Class.forName(“com.mysql.jdbc.Driver”);

即使不写代码，软件也会通过相关文件进行自动注册。



#### 2.获取数据库连接

static Connection getConnection（String  url，String user，String password）

url：指定连接的路径。    

语法：jdbc：mysql：//ip地址（域名）：端口号/数据库名称

PS：如果连接的是本机mysql服务器，并且端口号是3306，则url可以简写成jdbc：mysql：///数据库名称

user：用户名

password ：密码



## 为什么

### 注册驱动的目的

 告诉程序应该使用哪一个数据库驱动包。