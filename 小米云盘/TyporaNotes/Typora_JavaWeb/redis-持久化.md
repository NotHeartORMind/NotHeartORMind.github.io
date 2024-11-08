# redis持久化

## 分类

### 1.RDB（Redis DataBase）

RDB是Redis的一种持久化机制，它会将数据集的快照在某个时间点保存到磁盘上。

这是默认的方式，不需要进行配置。



### 2.AOF（Append-Only File）

AOF是Redis的另一种持久化机制，它通过记录每一个写操作到日志文件中实现持久化。

## 使用方法

### 1.RDB：

①编辑redis.windows.conf文件

例如，save  900  1    代表900s中，至少有1个key发生改变。那么就持久化存储

②重新启动redis服务器，并指定配置文件名称

![image-20240725205256740](./../TyporaImage/image-20240725205256740.png)

### 2.AOF

①编辑redis.windows.conf文件

appendonly no （关闭AOF） -->appendly yes （开启AOF）

![image-20240725205023310](./../TyporaImage/image-20240725205023310.png)

②

![image-20240725205301631](./../TyporaImage/image-20240725205301631.png)