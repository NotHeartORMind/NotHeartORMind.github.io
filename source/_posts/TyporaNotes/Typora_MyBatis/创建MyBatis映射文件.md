---

title: 创建MyBatis映射文件

date: 

updated: 

categories: MyBatis

tags: 

keywords: 

---
# 创建映射文件

一个数据库里的一张表，对应着一个mapper接口，对应着一个xml的映射文件。  他们的java代码结果通过实体类来展示。

映射文件要保持两个一致：

①mapper接口名称要与对应的xml文件名称一致

②mapper接口内部的方法名称要与xml文件内部的标签id一致







PS：

如果字段名与属性名一致用resultType，不一致用resultMap。

查询语句需要指定resultType，否则会报错

![image-20241011101742239](./../../TyporaImage/MyBatis/image-20241011101742239.png)
文件

一个数据库里的一张表，对应着一个mapper接口，对应着一个xml的映射文件。  他们的java代码结果通过实体类来展示。

映射文件要保持两个一致：

①mapper接口名称要与对应的xml文件名称一致

②mapper接口内部的方法名称要与xml文件内部的标签id一致







PS：

如果字段名与属性名一致用resultType，不一致用resultMap。

查询语句需要指定resultType，否则会报错

![image-20241011101742239](./../../TyporaImage/MyBatis/image-20241011101742239.png)