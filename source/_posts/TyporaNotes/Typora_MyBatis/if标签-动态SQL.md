---

title: if标签-动态SQL

date: 

updated: 

categories: MyBatis

tags: 

keywords: 

---
# if标签

通过if标签动态拼接SQL语句,来从实体类中接收参数来拼接SQL语句

## 1.编写动态拼接的mapper

![image-20241024215245780](./../../TyporaImage/MyBatis/image-20241024215245780.png)

## 2.设置mapper相对应的xml文件

![image-20241024215339313](./../../TyporaImage/MyBatis/image-20241024215339313.png)

### 在where后面加一个1=1,避免SQL拼接中的and问题.



## 3.调用



标签

通过if标签动态拼接SQL语句,来从实体类中接收参数来拼接SQL语句

## 1.编写动态拼接的mapper

![image-20241024215245780](./../../TyporaImage/MyBatis/image-20241024215245780.png)

## 2.设置mapper相对应的xml文件

![image-20241024215339313](./../../TyporaImage/MyBatis/image-20241024215339313.png)

### 在where后面加一个1=1,避免SQL拼接中的and问题.



## 3.调用