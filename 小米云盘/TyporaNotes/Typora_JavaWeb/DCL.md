# 怎么用

## 管理用户

### 创建

create user ‘用户名’@‘主机名’ identified ‘密码’；

### 删除

drop user ‘用户名’@‘主机名’；

### 修改

update user set password = password（‘新密码’） where user = ‘用户名’；

set password  for ‘用户名’@‘主机名’ = password（‘新密码’）；

### 查询

select * from 表名；





### PS：

%表示可以在任意主机使用用户登录数据库。

mysql忘记了root用户的密码：

1.用cmd 停止mysql服务。

2.使用无验证方式启动mysql服务。：mysql --skip-grant-tables；

3.打开新的cmd窗口，直接输入mysql命令即可，就可以登录成功了。

4.use mysql ；

5.update user set password = password（‘新密码’） where user = ‘root’；

6.关闭两个窗口，手动结束mysqld.exe的进程。

7.启动mysql服务

8.使用新密码重新登录。







## 授予权限

### 授予

grant 权限列表  on 数据库名.表名 to ‘用户名’@‘主机名’；

### 撤销

revoke	 权限列表  on 数据库名.表名  from  ‘用户名’@‘主机名’；



### 查询

show grants for ‘用户名’@‘主机名’；

### PS：

权限列表的通配符是ALL，数据库名的通配符是*****，表名的是*****