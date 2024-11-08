# JDBC工具类

## 怎么做

### 1.将注册驱动的相关代码抽取成一个方法。 --因为是只用注册一次以及相关文件的读取只需要一次，所以用静态代码块

![](../TyporaImage/image-20240501165055692.png)

![image-20240501165118873](../TyporaImage/image-20240501165118873.png)

### 2.将连接对象的相关代码抽取成一个方法     -- 可以通过properties文件进行连接对象更改。

properties文件：

url = ？

user= ？

password =？ 

Driver=？





### 3.将释放资源的相关代码抽取成一个方法

## 为什么

### 目的

简化书写。

## 相关知识点

获取src路径下文件方法：

通过ClassLoader类加载器获取properties文件的**相对路径**。

![image-20240501171050011](../TyporaImage/image-20240501171050011.png)