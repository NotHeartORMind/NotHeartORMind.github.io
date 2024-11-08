# MVC原理

## 基本原理

![image-20241031163642349](./../../TyporaImage/SpringMVC/image-20241031163642349.png)

![image-20241031163717251](./../../TyporaImage/SpringMVC/image-20241031163717251.png)

![image-20241031163801184](./../../TyporaImage/SpringMVC/image-20241031163801184.png)

## 自我理解:

![image-20241031172534966](./../../TyporaImage/SpringMVC/image-20241031172534966.png)

### 1.发出的命令会首先通过处理器映射器,通过bean的id映射到对应的class

### 2.适配器执行对应的class中的逻辑,并返回mv.

### 3.视图解析器找到想要渲染的视图,然后渲染并展示