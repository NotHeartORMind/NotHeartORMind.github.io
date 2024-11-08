const fs = require('fs');
const path = require('path');

// 设置目标文件夹路径
const folderPath = 'C:\\Users\\Administrator\\Desktop\\myblog\\source\\_posts\\TyporaNotes\\Typora_zhuangzi';  // 修改为你的 md 文件夹路径

// 定义一个正则表达式来匹配已存在的 YAML Front Matter 格式
const frontMatterRegex = /^---\s*[\s\S]*?\s*---\s*/;

// 设置统一的 categories 字段值
const categories = '庄子';  // 修改为你需要的 categories 值

// 用于统计更新和未更新的文件数
let updatedCount = 0;
let notUpdatedCount = 0;

// 获取文件夹内所有的文件
fs.readdir(folderPath, async (err, files) => {
    if (err) {
        console.error('读取文件夹失败:', err);
        return;
    }

    // 收集所有的 Promise，确保文件处理完成后再输出统计信息
    const filePromises = files.map(file => {
        const filePath = path.join(folderPath, file);

        // 只处理 .md 文件
        if (path.extname(file) === '.md') {
            return new Promise((resolve, reject) => {
                // 读取文件内容
                fs.readFile(filePath, 'utf-8', (err, content) => {
                    if (err) {
                        console.error(`读取文件 ${file} 失败:`, err);
                        notUpdatedCount++;  // 如果读取失败，视为未更新文件
                        return resolve();  // 确保继续处理其他文件
                    }

                    // 提取 Front Matter 部分（如果存在）
                    let frontMatterMatch = content.match(frontMatterRegex);
                    let contentAfterFrontMatter = content;

                    // 使用文件名作为 title
                    let titleLine = path.basename(file, '.md');  // 获取文件名并去除 .md 扩展名

                    // 如果文件包含 Front Matter
                    if (frontMatterMatch) {
                        contentAfterFrontMatter = content.slice(frontMatterMatch[0].length).trim(); // 获取 Front Matter 后的内容
                    }

                    // 设置前置 YAML Front Matter 元数据
                    const newFrontMatter = `---\n
title: ${titleLine}\n
date: \n
updated: \n
categories: ${categories}\n
tags: \n
keywords: \n
---\n`;

                    // 如果文件包含 Front Matter，替换掉原有 Front Matter；否则，添加新的 Front Matter
                    let newContent;
                    if (frontMatterMatch) {
                        newContent = content.replace(frontMatterMatch[0], newFrontMatter) + contentAfterFrontMatter;
                    } else {
                        newContent = newFrontMatter + content;
                    }

                    // 比较新旧内容，检查是否有修改
                    if (content !== newContent) {
                        // 写入修改后的文件
                        fs.writeFile(filePath, newContent, 'utf-8', err => {
                            if (err) {
                                console.error(`写入文件 ${file} 失败:`, err);
                                notUpdatedCount++;  // 写入失败，视为未更新
                                return resolve();  // 继续处理其他文件
                            } else {
                                updatedCount++;  // 如果内容有变化，视为已更新
                                console.log(`已更新文件: ${file}`);
                                resolve();  // 处理完成
                            }
                        });
                    } else {
                        notUpdatedCount++;  // 如果内容没有变化，视为未更新
                        resolve();  // 继续处理其他文件
                    }
                });
            });
        }

        // 返回一个 resolved Promise，表示不处理的文件
        return Promise.resolve();
    });

    // 等待所有文件处理完成
    await Promise.all(filePromises);

    // 输出统计信息
    console.log(`更新的文件数: ${updatedCount}`);
    console.log(`未更新的文件数: ${notUpdatedCount}`);
});
