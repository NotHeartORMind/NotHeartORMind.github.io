---

title: JSON简介

date: 

updated: 

categories: SpringMVC

tags: 

keywords: 

---
# JSON简介

## 定义

JSON(JavaScript Object Notation, JS 对象标记) 是一种轻量级的数据交换格式.

 对象表示为键值对，数据由逗号分隔.花括号保存对象,方括号保存数组 .

## 与JavaScript关系

JSON 是 JavaScript 对象的字符串表示法，它使用文本表示一个 JS 对象的信息，本质是一个字符串。

## JSON与JavaScript相互转换



1.从JSON字符串转换为JavaScript 对象，使用 JSON.parse() 方法：

``` java
var obj = JSON.parse('{"a": "Hello", "b": "World"}');
// 结果是 {a: 'Hello', b: 'World'}

```

2.从JavaScript 对象转换为JSON字符串，使用 JSON.stringify() 方法：

```java
var json = JSON.stringify({a: 'Hello', b: 'World'});
// 结果是 '{"a": "Hello", "b": "World"}'

```

简介

## 定义

JSON(JavaScript Object Notation, JS 对象标记) 是一种轻量级的数据交换格式.

 对象表示为键值对，数据由逗号分隔.花括号保存对象,方括号保存数组 .

## 与JavaScript关系

JSON 是 JavaScript 对象的字符串表示法，它使用文本表示一个 JS 对象的信息，本质是一个字符串。

## JSON与JavaScript相互转换



1.从JSON字符串转换为JavaScript 对象，使用 JSON.parse() 方法：

``` java
var obj = JSON.parse('{"a": "Hello", "b": "World"}');
// 结果是 {a: 'Hello', b: 'World'}

```

2.从JavaScript 对象转换为JSON字符串，使用 JSON.stringify() 方法：

```java
var json = JSON.stringify({a: 'Hello', b: 'World'});
// 结果是 '{"a": "Hello", "b": "World"}'

```