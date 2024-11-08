# MyBatis

## 1.数据库配置文件 **database.properties**

``` properties
jdbc.driver=com.mysql.jdbc.Driver
# 如果使用的是MySQL8.0+,增加一个时区的配置。
jdbc.url=jdbc:mysql://localhost:3306/ssmbuild?useSSL=true&useUnicode=true&characterEncoding=utf8
jdbc.username=root
jdbc.password=root

```

## 2.IDEA关联数据库

## 3.编写MyBatis的核心配置文件

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>

    <typeAliases>
        <package name="com.github.subei.pojo"/>
    </typeAliases>
    
    <mappers>
        <mapper class="com.github.subei.dao.BookMapper"/>
    </mappers>

</configuration>

```

## 4.编写数据库对应的实体类,使用lombok插件.

## 5.编写Dao层的 Mapper接口！

## 6.编写接口对应的Mapper.xml 文件。需要导入MyBatis的包；

## 7.编写Service层的接口和实现类