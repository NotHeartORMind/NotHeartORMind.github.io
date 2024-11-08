---

title: Maven—scope依赖配置范围

date: 

updated: 

categories: JavaWeb

tags: 

keywords: 

---
# 依赖配置范围

## 定义

Maven中的scope（依赖配置范围）用于定义依赖在项目中的使用范围和生命周期。不同的scope决定了依赖在编译、测试、运行等阶段的可见性和使用情况。

## 组成部分

### 1.compile

编译范围，默认范围，适用于编译、测试和运行阶段。

### 2.provided

提供范围，依赖在编译和测试阶段可用，但在运行时由运行环境提供。

### 3.runtime

运行时范围，依赖在运行和测试阶段可用，但在编译时不可用。

### 4.test

测试范围，依赖仅在测试编译和测试运行阶段可用。

### 5.system

系统范围，类似于provided，但依赖需要显式提供系统路径。

### 6.import

导入范围，用于依赖管理中的<dependencyManagement>，从一个BOM（Bill of Materials）导入依赖。

## 结构形式

依赖的scope通常在POM文件中的<dependency>标签内定义，例如：
<dependency>
    <groupId>org.example</groupId>
    <artifactId>example-artifact</artifactId>
    <version>1.0.0</version>
    <scope>test</scope>
</dependency>

## 分类

### 按使用场景划分

1.编译

2.测试

3.运行

4.系统

5.导入## 定义

Maven中的scope（依赖配置范围）用于定义依赖在项目中的使用范围和生命周期。不同的scope决定了依赖在编译、测试、运行等阶段的可见性和使用情况。

## 组成部分

### 1.compile

编译范围，默认范围，适用于编译、测试和运行阶段。

### 2.provided

提供范围，依赖在编译和测试阶段可用，但在运行时由运行环境提供。

### 3.runtime

运行时范围，依赖在运行和测试阶段可用，但在编译时不可用。

### 4.test

测试范围，依赖仅在测试编译和测试运行阶段可用。

### 5.system

系统范围，类似于provided，但依赖需要显式提供系统路径。

### 6.import

导入范围，用于依赖管理中的<dependencyManagement>，从一个BOM（Bill of Materials）导入依赖。

## 结构形式

依赖的scope通常在POM文件中的<dependency>标签内定义，例如：
<dependency>
    <groupId>org.example</groupId>
    <artifactId>example-artifact</artifactId>
    <version>1.0.0</version>
    <scope>test</scope>
</dependency>

## 分类

### 按使用场景划分

1.编译

2.测试

3.运行

4.系统

5.导入范围

## 定义

Maven中的scope（依赖配置范围）用于定义依赖在项目中的使用范围和生命周期。不同的scope决定了依赖在编译、测试、运行等阶段的可见性和使用情况。

## 组成部分

### 1.compile

编译范围，默认范围，适用于编译、测试和运行阶段。

### 2.provided

提供范围，依赖在编译和测试阶段可用，但在运行时由运行环境提供。

### 3.runtime

运行时范围，依赖在运行和测试阶段可用，但在编译时不可用。

### 4.test

测试范围，依赖仅在测试编译和测试运行阶段可用。

### 5.system

系统范围，类似于provided，但依赖需要显式提供系统路径。

### 6.import

导入范围，用于依赖管理中的<dependencyManagement>，从一个BOM（Bill of Materials）导入依赖。

## 结构形式

依赖的scope通常在POM文件中的<dependency>标签内定义，例如：
<dependency>
    <groupId>org.example</groupId>
    <artifactId>example-artifact</artifactId>
    <version>1.0.0</version>
    <scope>test</scope>
</dependency>

## 分类

### 按使用场景划分

1.编译

2.测试

3.运行

4.系统

5.导入## 定义

Maven中的scope（依赖配置范围）用于定义依赖在项目中的使用范围和生命周期。不同的scope决定了依赖在编译、测试、运行等阶段的可见性和使用情况。

## 组成部分

### 1.compile

编译范围，默认范围，适用于编译、测试和运行阶段。

### 2.provided

提供范围，依赖在编译和测试阶段可用，但在运行时由运行环境提供。

### 3.runtime

运行时范围，依赖在运行和测试阶段可用，但在编译时不可用。

### 4.test

测试范围，依赖仅在测试编译和测试运行阶段可用。

### 5.system

系统范围，类似于provided，但依赖需要显式提供系统路径。

### 6.import

导入范围，用于依赖管理中的<dependencyManagement>，从一个BOM（Bill of Materials）导入依赖。

## 结构形式

依赖的scope通常在POM文件中的<dependency>标签内定义，例如：
<dependency>
    <groupId>org.example</groupId>
    <artifactId>example-artifact</artifactId>
    <version>1.0.0</version>
    <scope>test</scope>
</dependency>

## 分类

### 按使用场景划分

1.编译

2.测试

3.运行

4.系统

5.导入