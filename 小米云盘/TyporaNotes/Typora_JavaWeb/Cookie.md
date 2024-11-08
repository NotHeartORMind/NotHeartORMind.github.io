# Cookie

## 定义

Cookie是由服务器生成并发送到客户端的一小段数据，客户端会在后续请求中将其附加回服务器，用于在多个请求之间保持状态。

## 特点

### 1.可以创建多个Cookie对象

### 2.保存时间

①默认情况下，浏览器关闭Cookie销毁

②持久化存储

setMaxAge（int seconds）

正数：将Cookie数据写到硬盘文件中，并且有一定的存活时间

0：删除Cookie信息

负数：默认值

### 3.Cookie可以存储中文数据

### 4.Cookie获取范围

①默认情况下Cookie在多个web项目下不可以共享

②运用setPath（String path）方法，可以改变Cookie的共享范围

如果在多个web项目下共享，可以将path设置为“/”、

③如果在不同的tomcat服务器之间进行共享

可以用setDomain（String path）方法

![image-20240709082210313](./../TyporaImage/image-20240709082210313.png)

### 5.Cookie存储在浏览器

### 6.浏览器对于单个cookie大小和同一个域名的cookie数量有限制



## 基本原理

![image-20240709081503575](./../TyporaImage/image-20240709081503575.png)



## 使用方法

### 1.创建Cookie对象，绑定数据

new Cookie（Sstring name，String value）

### 2.发送Cookie对象

response.addCookie（Cookie cookie）

### 3.获取Cookie，拿到数据

request.getCookies（）