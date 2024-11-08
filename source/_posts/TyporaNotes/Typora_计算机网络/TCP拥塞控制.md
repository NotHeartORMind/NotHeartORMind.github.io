---

title: TCP拥塞控制

date: 

updated: 

categories: 计算机网络

tags: 

keywords: 

---
# TCP拥塞控制

## 定义

TCP拥塞控制是指传输控制协议（TCP）在数据传输过程中通过一系列机制防止网络拥塞，确保网络资源高效利用，并维护数据传输的可靠性和稳定性。

## 组成部分

1.慢启动（Slow Start）

逐步增加发送速率，避免初始发送量过大导致网络拥塞。

2.拥塞避免（Congestion Avoidance）

发送速率接近网络容量时，逐步调整发送量以避免拥塞。

3.快速重传（Fast Retransmit）

在检测到数据包丢失时，快速重传未确认的数据包。

4.快速恢复（Fast Recovery）

在丢包后快速恢复数据发送速率，避免完全重新开始慢启动。



## 结构形式

1.拥塞窗口（Congestion Window，cwnd）

用于控制发送方的最大数据发送量。

2.慢启动门限（Slow Start Threshold，ssthresh）

定义慢启动和拥塞避免的切换点。

## 基本原理

![image-20240623132354169](../TyporaImage/image-20240623132354169.png)

![image-20240623132450512](../TyporaImage/image-20240623132450512.png)

![image-20240623132506958](../TyporaImage/image-20240623132506958.png)控制

## 定义

TCP拥塞控制是指传输控制协议（TCP）在数据传输过程中通过一系列机制防止网络拥塞，确保网络资源高效利用，并维护数据传输的可靠性和稳定性。

## 组成部分

1.慢启动（Slow Start）

逐步增加发送速率，避免初始发送量过大导致网络拥塞。

2.拥塞避免（Congestion Avoidance）

发送速率接近网络容量时，逐步调整发送量以避免拥塞。

3.快速重传（Fast Retransmit）

在检测到数据包丢失时，快速重传未确认的数据包。

4.快速恢复（Fast Recovery）

在丢包后快速恢复数据发送速率，避免完全重新开始慢启动。



## 结构形式

1.拥塞窗口（Congestion Window，cwnd）

用于控制发送方的最大数据发送量。

2.慢启动门限（Slow Start Threshold，ssthresh）

定义慢启动和拥塞避免的切换点。

## 基本原理

![image-20240623132354169](../TyporaImage/image-20240623132354169.png)

![image-20240623132450512](../TyporaImage/image-20240623132450512.png)

![image-20240623132506958](../TyporaImage/image-20240623132506958.png)# TCP拥塞控制

## 定义

TCP拥塞控制是指传输控制协议（TCP）在数据传输过程中通过一系列机制防止网络拥塞，确保网络资源高效利用，并维护数据传输的可靠性和稳定性。

## 组成部分

1.慢启动（Slow Start）

逐步增加发送速率，避免初始发送量过大导致网络拥塞。

2.拥塞避免（Congestion Avoidance）

发送速率接近网络容量时，逐步调整发送量以避免拥塞。

3.快速重传（Fast Retransmit）

在检测到数据包丢失时，快速重传未确认的数据包。

4.快速恢复（Fast Recovery）

在丢包后快速恢复数据发送速率，避免完全重新开始慢启动。



## 结构形式

1.拥塞窗口（Congestion Window，cwnd）

用于控制发送方的最大数据发送量。

2.慢启动门限（Slow Start Threshold，ssthresh）

定义慢启动和拥塞避免的切换点。

## 基本原理

![image-20240623132354169](../TyporaImage/image-20240623132354169.png)

![image-20240623132450512](../TyporaImage/image-20240623132450512.png)

![image-20240623132506958](../TyporaImage/image-20240623132506958.png)控制

## 定义

TCP拥塞控制是指传输控制协议（TCP）在数据传输过程中通过一系列机制防止网络拥塞，确保网络资源高效利用，并维护数据传输的可靠性和稳定性。

## 组成部分

1.慢启动（Slow Start）

逐步增加发送速率，避免初始发送量过大导致网络拥塞。

2.拥塞避免（Congestion Avoidance）

发送速率接近网络容量时，逐步调整发送量以避免拥塞。

3.快速重传（Fast Retransmit）

在检测到数据包丢失时，快速重传未确认的数据包。

4.快速恢复（Fast Recovery）

在丢包后快速恢复数据发送速率，避免完全重新开始慢启动。



## 结构形式

1.拥塞窗口（Congestion Window，cwnd）

用于控制发送方的最大数据发送量。

2.慢启动门限（Slow Start Threshold，ssthresh）

定义慢启动和拥塞避免的切换点。

## 基本原理

![image-20240623132354169](../TyporaImage/image-20240623132354169.png)

![image-20240623132450512](../TyporaImage/image-20240623132450512.png)

![image-20240623132506958](../TyporaImage/image-20240623132506958.png)