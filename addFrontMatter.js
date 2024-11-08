const fs = require('fs');
const path = require('path');

// 设置目标文件夹路径
const folderPath = 'C:\\Users\\Administrator\\Desktop\\myblog\\小米云盘\\TyporaNotes\\Typora_Zhuangzi';  // 修改为你的 md 文件夹路径

// 定义一个正则表达式来匹配已存在的 YAML Front Matter 格式
const frontMatterRegex = /^---\s*[\s\S]*?\s*---\s*/;

// 统计变量
let updatedCount = 0;  // 更新的文件数量
let skippedCount = 0;  // 跳过更新的文件数量
let processedCount = 0; // 已处理的文件数量

// 获取文件夹内所有的文件
fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error('读取文件夹失败:', err);
        return;
    }

    // 过滤出所有的 .md 文件
    const mdFiles = files.filter(file => path.extname(file) === '.md');
    const totalFiles = mdFiles.length;

    if (totalFiles === 0) {
        console.log("没有找到任何 .md 文件。");
        return;
    }

    // 为每个文件创建一个 Promise
    const filePromises = mdFiles.map(file => {
        const filePath = path.join(folderPath, file);

        return new Promise((resolve, reject) => {
            // 读取文件内容
            fs.readFile(filePath, 'utf-8', (err, content) => {
                if (err) {
                    console.error(`读取文件 ${file} 失败:`, err);
                    processedCount++;
                    return resolve();  // 即使失败也继续处理其他文件
                }

                // 检查文件是否已经包含前置 YAML Front Matter
                if (frontMatterRegex.test(content)) {
                    console.log(`文件 ${file} 已包含 Front Matter，跳过更新.`);
                    skippedCount++;  // 跳过更新的文件数量增加
                    processedCount++;
                    return resolve(); // 跳过文件时也需要 resolve
                }

                // 设置前置 YAML Front Matter 元数据
                const frontMatter = `---\n
title: 
date: 
updated: 
categories: 
tags: 
keywords: 
---\n`;

                // 如果文件没有前置内容，则添加
                const newContent = frontMatter + content;
                fs.writeFile(filePath, newContent, 'utf-8', err => {
                    if (err) {
                        console.error(`写入文件 ${file} 失败:`, err);
                    } else {
                        console.log(`已更新文件: ${file}`);
                        updatedCount++;  // 更新的文件数量增加
                    }
                    processedCount++;
                    resolve();
                });
            });
        });
    });

    // 使用 Promise.all 来确保所有文件处理完成后输出统计信息
    Promise.all(filePromises).then(() => {
        console.log(`总共更新了 ${updatedCount} 个文件。`);
        console.log(`跳过了 ${skippedCount} 个文件。`);
    }).catch(err => {
        console.error('处理文件时发生错误:', err);
    });
});
