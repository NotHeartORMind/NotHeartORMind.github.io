---

title: Mybatis一级缓存

date: 

updated: 

categories: MyBatis

tags: 

keywords: 

---
# 一级缓存

一级缓存默认开启.级别:SqlSession.

在同一个SqlSession中,查询相同的数据,会从缓存中拿取数据.

![image-20241025164247462](./../../TyporaImage/MyBatis/image-20241025164247462.png)

从日志中,可以看出只调用了一次sql语句

缓存

一级缓存默认开启.级别:SqlSession.

在同一个SqlSession中,查询相同的数据,会从缓存中拿取数据.

![image-20241025164247462](./../../TyporaImage/MyBatis/image-20241025164247462.png)

从日志中,可以看出只调用了一次sql语句