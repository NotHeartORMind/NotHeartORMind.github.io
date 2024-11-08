# Servlet

## 是什么

### 定义

server和applet，即运行在服务器端的小程序。本质上是一个接口，定义了java类被浏览器访问到（tomcat识别）的规则。

### 结构形式

![image-20240527210742990](../TyporaImage/image-20240527210742990.png)



## 怎么做

### 使用方法

1.创建JavaEE项目

2.定义一个类

3.实现接口中的抽象方法

4.配置Servlet

![image-20240527204814260](../TyporaImage/image-20240527204814260.png)



## 为什么



### 基本原理

1.当服务器接收到客户端浏览器的请求后，会解析请求URL路径， 获取访问Servlet的资源路径

2.查找web.xml文件，是否有对应的<url-pattern>标签体内容

3.如果有，则找到对应的<servlet-class>全类名

4.tomcat会将字节码文件加载进内存，并且创建其对象

5.调用其方法

![image-20240527205319838](../TyporaImage/image-20240527205319838.png)