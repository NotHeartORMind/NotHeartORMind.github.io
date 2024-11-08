# ResultMap(查询语句)

## 1.将select语句中属性设置为resultmap

![image-20241023165141731](./../../TyporaImage/MyBatis/image-20241023165141731.png)

## 2.在同一个xml文件中,自定义这个resultmap类型

![image-20241023165217805](./../../TyporaImage/MyBatis/image-20241023165217805.png)

id属性是唯一标识

type设置映射关系中实体类的类型

id标签用来设置主键字段的映射关系

result标签用来设置普通字段的映射关系

property属性设置实体类属性

culumn属性设置查询的字段名