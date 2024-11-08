# Bean的作用域

## 定义

在Spring框架中，Bean的作用域（Scope）定义了Bean的生命周期和可见性。作用域决定了一个Bean实例在Spring容器中的存在时间，以及每次请求该Bean时是否返回相同的实例。

## 组成部分

### 1.单例（Singleton）

Spring容器中仅创建一个Bean实例，并在整个应用程序生命周期内共享这个实例。

### 2.原型（Prototype）

每次请求时创建一个新的Bean实例。

### 3.请求（Request）

在Web应用中，每个HTTP请求创建一个Bean实例，并在请求结束后销毁。

### 4.会话（Session）

在Web应用中，每个HTTP会话创建一个Bean实例，并在会话结束后销毁。

### 5.应用程序（Application）

在Web应用中，整个ServletContext范围内共享一个Bean实例。

### 6.WebSocket

在WebSocket会话中共享一个Bean实例。

## 结构形式

通过注解或XML配置指定Bean的作用域。

## 分类

1.单例作用域：@Scope("singleton")或默认值。
2.原型作用域：@Scope("prototype")。
3.Web作用域：@Scope("request")、@Scope("session")、@Scope("application")、@Scope("websocket")。

## 目的

通过定义Bean的作用域，Spring框架能够有效地管理Bean的生命周期和作用范围，以满足不同应用场景的需求。

## 基本原理

通过配置Bean的作用域，Spring IoC容器在创建和管理Bean实例时遵循相应的作用域规则。例如，Singleton作用域意味着容器中只有一个共享实例，而Prototype作用域则意味着每次请求都会创建一个新的实例。