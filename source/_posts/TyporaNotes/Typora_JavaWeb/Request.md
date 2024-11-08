---

title: Request

date: 

updated: 

categories: JavaWeb

tags: 

keywords: 

---
# Request

## 定义

在计算机科学和后端开发中，`request`（请求）是指客户端（如浏览器、应用程序等）向服务器发出的数据请求。这个请求通常是为了获取信息、执行操作或与服务器进行交互。



## 功能

### 一、获取请求消息数据

#### 1.获取请求行数据

①获取请求方式：Get

String getmethod()

②**获取虚拟目录：**

String getContextPath()

③获取Servlet路径：

String getServletPath（）

④获取请求参数：

String getQueryString()

**String getRequestURI()**

StringBuffer getRequestURL() 

⑤获取版本及协议：

String getProtocol（）

⑥获取客户机的IP地址：

String getReMoteAddr（）



#### 2、获取请求头数据

①String getHeader（String name） ：

通过请求头的名字，获取请求头的数值

②getHeaderNames():

获取所有请求头名称

#### 3、获取请求体数据

只有Post方式才有请求体

步骤：

1.获取流对象

BuffferedReader  getReader（）：获取字符流，只能操作字符数据

ServletInputStream getInputStream（）：获取字节输入流，可以操作所有的数据类型。



2.从流对象中获取数据

 

### 二.其他功能



#### 1.获取请求参数（通用方式）



①.获取所有参数的名称

getParameterNames():

②.根据参数名称获取参数值

getParaMeter（String name ）：

③根据参数名称获取参数值的数组

String[] getParaMeterValues(String name )：

④获取所有参数的Map集合

Map<String，String[]> getParameterMap（）：



#### 2.请求转发：一种在服务器内部的资源跳转

步骤：

①.通过request对象，获取请求转发器对象RequestDispatcher getRequestDispatcher(String path)

②.使用请求转发器对象进行转发。

forward（ServletRequest request，ServletResponse response）

特点：

1.浏览器地址栏路径不会改变

2.只能转发到当前服务器内部资源中。



#### 3.共享数据

1.域对象：一个有作用域的的对象，可以在对象范围内共享数据

2.request域：

代表一次请求的范围，一般用于请求转发的多个资源中共享数据

 setAttribute（String name，Object obj）：存储数据

getAttribute（String name ）：通过键值获取值

removeAttribute（String name ）：通过键移除键值对

#### 4.获取ServletContext

getServletContext（）











## 基本原理

![image-20240705111257282](../TyporaImage/image-20240705111257282.png)

## 相关知识点

### 1.继承体系

![image-20240705111413415](../TyporaImage/image-20240705111413415.png)

### 2.获取请求参数中文乱码的问题

get方式不会出现乱码问题

post方式中，需要设置流的字符集。根据页面上的字符集设置
## 定义

在计算机科学和后端开发中，`request`（请求）是指客户端（如浏览器、应用程序等）向服务器发出的数据请求。这个请求通常是为了获取信息、执行操作或与服务器进行交互。



## 功能

### 一、获取请求消息数据

#### 1.获取请求行数据

①获取请求方式：Get

String getmethod()

②**获取虚拟目录：**

String getContextPath()

③获取Servlet路径：

String getServletPath（）

④获取请求参数：

String getQueryString()

**String getRequestURI()**

StringBuffer getRequestURL() 

⑤获取版本及协议：

String getProtocol（）

⑥获取客户机的IP地址：

String getReMoteAddr（）



#### 2、获取请求头数据

①String getHeader（String name） ：

通过请求头的名字，获取请求头的数值

②getHeaderNames():

获取所有请求头名称

#### 3、获取请求体数据

只有Post方式才有请求体

步骤：

1.获取流对象

BuffferedReader  getReader（）：获取字符流，只能操作字符数据

ServletInputStream getInputStream（）：获取字节输入流，可以操作所有的数据类型。



2.从流对象中获取数据

 

### 二.其他功能



#### 1.获取请求参数（通用方式）



①.获取所有参数的名称

getParameterNames():

②.根据参数名称获取参数值

getParaMeter（String name ）：

③根据参数名称获取参数值的数组

String[] getParaMeterValues(String name )：

④获取所有参数的Map集合

Map<String，String[]> getParameterMap（）：



#### 2.请求转发：一种在服务器内部的资源跳转

步骤：

①.通过request对象，获取请求转发器对象RequestDispatcher getRequestDispatcher(String path)

②.使用请求转发器对象进行转发。

forward（ServletRequest request，ServletResponse response）

特点：

1.浏览器地址栏路径不会改变

2.只能转发到当前服务器内部资源中。



#### 3.共享数据

1.域对象：一个有作用域的的对象，可以在对象范围内共享数据

2.request域：

代表一次请求的范围，一般用于请求转发的多个资源中共享数据

 setAttribute（String name，Object obj）：存储数据

getAttribute（String name ）：通过键值获取值

removeAttribute（String name ）：通过键移除键值对

#### 4.获取ServletContext

getServletContext（）











## 基本原理

![image-20240705111257282](../TyporaImage/image-20240705111257282.png)

## 相关知识点

### 1.继承体系

![image-20240705111413415](../TyporaImage/image-20240705111413415.png)

### 2.获取请求参数中文乱码的问题

get方式不会出现乱码问题

post方式中，需要设置流的字符集。根据页面上的字符集设置st

## 定义

在计算机科学和后端开发中，`request`（请求）是指客户端（如浏览器、应用程序等）向服务器发出的数据请求。这个请求通常是为了获取信息、执行操作或与服务器进行交互。



## 功能

### 一、获取请求消息数据

#### 1.获取请求行数据

①获取请求方式：Get

String getmethod()

②**获取虚拟目录：**

String getContextPath()

③获取Servlet路径：

String getServletPath（）

④获取请求参数：

String getQueryString()

**String getRequestURI()**

StringBuffer getRequestURL() 

⑤获取版本及协议：

String getProtocol（）

⑥获取客户机的IP地址：

String getReMoteAddr（）



#### 2、获取请求头数据

①String getHeader（String name） ：

通过请求头的名字，获取请求头的数值

②getHeaderNames():

获取所有请求头名称

#### 3、获取请求体数据

只有Post方式才有请求体

步骤：

1.获取流对象

BuffferedReader  getReader（）：获取字符流，只能操作字符数据

ServletInputStream getInputStream（）：获取字节输入流，可以操作所有的数据类型。



2.从流对象中获取数据

 

### 二.其他功能



#### 1.获取请求参数（通用方式）



①.获取所有参数的名称

getParameterNames():

②.根据参数名称获取参数值

getParaMeter（String name ）：

③根据参数名称获取参数值的数组

String[] getParaMeterValues(String name )：

④获取所有参数的Map集合

Map<String，String[]> getParameterMap（）：



#### 2.请求转发：一种在服务器内部的资源跳转

步骤：

①.通过request对象，获取请求转发器对象RequestDispatcher getRequestDispatcher(String path)

②.使用请求转发器对象进行转发。

forward（ServletRequest request，ServletResponse response）

特点：

1.浏览器地址栏路径不会改变

2.只能转发到当前服务器内部资源中。



#### 3.共享数据

1.域对象：一个有作用域的的对象，可以在对象范围内共享数据

2.request域：

代表一次请求的范围，一般用于请求转发的多个资源中共享数据

 setAttribute（String name，Object obj）：存储数据

getAttribute（String name ）：通过键值获取值

removeAttribute（String name ）：通过键移除键值对

#### 4.获取ServletContext

getServletContext（）











## 基本原理

![image-20240705111257282](../TyporaImage/image-20240705111257282.png)

## 相关知识点

### 1.继承体系

![image-20240705111413415](../TyporaImage/image-20240705111413415.png)

### 2.获取请求参数中文乱码的问题

get方式不会出现乱码问题

post方式中，需要设置流的字符集。根据页面上的字符集设置
## 定义

在计算机科学和后端开发中，`request`（请求）是指客户端（如浏览器、应用程序等）向服务器发出的数据请求。这个请求通常是为了获取信息、执行操作或与服务器进行交互。



## 功能

### 一、获取请求消息数据

#### 1.获取请求行数据

①获取请求方式：Get

String getmethod()

②**获取虚拟目录：**

String getContextPath()

③获取Servlet路径：

String getServletPath（）

④获取请求参数：

String getQueryString()

**String getRequestURI()**

StringBuffer getRequestURL() 

⑤获取版本及协议：

String getProtocol（）

⑥获取客户机的IP地址：

String getReMoteAddr（）



#### 2、获取请求头数据

①String getHeader（String name） ：

通过请求头的名字，获取请求头的数值

②getHeaderNames():

获取所有请求头名称

#### 3、获取请求体数据

只有Post方式才有请求体

步骤：

1.获取流对象

BuffferedReader  getReader（）：获取字符流，只能操作字符数据

ServletInputStream getInputStream（）：获取字节输入流，可以操作所有的数据类型。



2.从流对象中获取数据

 

### 二.其他功能



#### 1.获取请求参数（通用方式）



①.获取所有参数的名称

getParameterNames():

②.根据参数名称获取参数值

getParaMeter（String name ）：

③根据参数名称获取参数值的数组

String[] getParaMeterValues(String name )：

④获取所有参数的Map集合

Map<String，String[]> getParameterMap（）：



#### 2.请求转发：一种在服务器内部的资源跳转

步骤：

①.通过request对象，获取请求转发器对象RequestDispatcher getRequestDispatcher(String path)

②.使用请求转发器对象进行转发。

forward（ServletRequest request，ServletResponse response）

特点：

1.浏览器地址栏路径不会改变

2.只能转发到当前服务器内部资源中。



#### 3.共享数据

1.域对象：一个有作用域的的对象，可以在对象范围内共享数据

2.request域：

代表一次请求的范围，一般用于请求转发的多个资源中共享数据

 setAttribute（String name，Object obj）：存储数据

getAttribute（String name ）：通过键值获取值

removeAttribute（String name ）：通过键移除键值对

#### 4.获取ServletContext

getServletContext（）











## 基本原理

![image-20240705111257282](../TyporaImage/image-20240705111257282.png)

## 相关知识点

### 1.继承体系

![image-20240705111413415](../TyporaImage/image-20240705111413415.png)

### 2.获取请求参数中文乱码的问题

get方式不会出现乱码问题

post方式中，需要设置流的字符集。根据页面上的字符集设置