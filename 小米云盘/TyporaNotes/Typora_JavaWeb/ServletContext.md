# 	ServletContext

## 定义

它代表了一个Web应用程序的上下文。在Servlet容器（如Apache Tomcat）中，每个Web应用程序都有一个唯一的ServletContext对象，该对象在应用程序启动时被创建，在应用程序停止时被销毁。

## 功能

1.获取MIME类型

2.共享数据（域对象）

3.获取文件的真实路径（服务器路径）

## 使用方式

#### Ⅰ、获取ServletContext对象

1.通过request对象获取

2.通过HttpServlet获取

#### Ⅱ、获取MIME类型

MIME：在互联网通信中的一种文件类型

格式：  大类型/小类型

getMimeType（）

#### Ⅲ、域对象

范围：所有用户的数据

1.setAttribute（）

2.getAttribute（）

3.removeAttribute（）

#### Ⅳ、获取文件的真实路径

以web目录为起点进行资源路径编写

1.web目录下的资源访问

2.webinfo下的访问

3.src目录下的访问

这个目录以后会被放在webinfo目录下的classes目录。