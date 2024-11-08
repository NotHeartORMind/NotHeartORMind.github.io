# 简单类型

## 定义

在Spring框架中，简单类型（Simple Type）指的是基本数据类型及其包装类，以及一些特定的标准类，这些类型通常在依赖注入和数据绑定过程中被直接处理和转换。

## 组成部分

### 1.基本数据类型

如int、long、double、boolean等。

### 2.包装类

如Integer、Long、Double、Boolean等。

### 3.字符串

如String。

### 4.日期和时间类型

如java.util.Date、java.time.LocalDate、java.time.LocalDateTime等。

### 5.其他常用类型

如java.math.BigInteger、java.math.BigDecimal等。

## 结构形式

### 1.基本数据类型

如int、char。

### 2.包装类和其他类

如Integer、String、Date等。

## 分类

1.基本类型Java原生的基本数据类型。
2.包装类型：对应基本数据类型的包装类。
3.字符串类型：String。
4.日期和时间类型：Date、LocalDate、LocalDateTime等。
5.数值类型：BigInteger、BigDecimal等。





## 使用方法

配置spring文件，通过value进行注入数据

![image-20240807163301509](../../TyporaImage/Spring/image-20240807163301509.png)

## 相关知识点

1.Date，这个简单类型，一般当做非简单类型来使用。

虽然是简单类型，但是需要采用特定的格式，这个格式一般人记不住。



