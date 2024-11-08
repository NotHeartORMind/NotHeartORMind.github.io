---

title: CGLIB动态代理

date: 

updated: 

categories: Spring

tags: 

keywords: 

---
# CGLIB动态代理

## 使用方法

1.创建字节码增强器对象。

![image-20240918211210960](./../../TyporaImage/Spring/image-20240918211210960.png)

2.设置目标类。 

![image-20240918211159753](./../../TyporaImage/Spring/image-20240918211159753.png)

3.设置回调。  这部分用来设置增强代码，在CGLIB中这个部分叫MethodInterceptor。

![image-20240918211303150](./../../TyporaImage/Spring/image-20240918211303150.png)

4.调用代理对象的代理方法。







PS：

JDK高于8的可能出问题，需要在在Add VM options中配置两个参数。

![image-20240918211506395](./../../TyporaImage/Spring/image-20240918211506395.png)
代理

## 使用方法

1.创建字节码增强器对象。

![image-20240918211210960](./../../TyporaImage/Spring/image-20240918211210960.png)

2.设置目标类。 

![image-20240918211159753](./../../TyporaImage/Spring/image-20240918211159753.png)

3.设置回调。  这部分用来设置增强代码，在CGLIB中这个部分叫MethodInterceptor。

![image-20240918211303150](./../../TyporaImage/Spring/image-20240918211303150.png)

4.调用代理对象的代理方法。







PS：

JDK高于8的可能出问题，需要在在Add VM options中配置两个参数。

![image-20240918211506395](./../../TyporaImage/Spring/image-20240918211506395.png)