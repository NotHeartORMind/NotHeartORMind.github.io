const fs = require('fs');
const path = require('path');

// Front Matter 匹配正则
const frontMatterRegex = /^---\s*([\s\S]*?)\s*---\s*/;

// 设置目标文件夹路径
const folderPath = 'C:\\Users\\Administrator\\Desktop\\myblog\\小米云盘\\TyporaNotes\\Typora_Zhuangzi';  // 修改为你的 md 文件夹路径

// 用于统计更新和未更新的文件数
let updatedCount = 0;
let notUpdatedCount = 0;

// 递归处理文件夹及其子文件夹
function processFolder(folderPath) {
    return new Promise((resolve, reject) => {
        fs.readdir(folderPath, (err, files) => {
            if (err) {
                console.error('读取文件夹失败:', err);
                reject(err);
                return;
            }

            const filePromises = files.map(file => {
                const filePath = path.join(folderPath, file);

                return new Promise((resolveFile, rejectFile) => {
                    // 判断是文件夹还是文件
                    fs.stat(filePath, (err, stats) => {
                        if (err) {
                            console.error(`读取文件 ${filePath} 失败:`, err);
                            notUpdatedCount++;
                            return resolveFile();  // 继续处理其他文件
                        }

                        // 如果是文件夹，递归调用
                        if (stats.isDirectory()) {
                            processFolder(filePath).then(resolveFile).catch(rejectFile);
                        } else if (path.extname(file) === '.md') {
                            // 只处理 .md 文件
                            fs.readFile(filePath, 'utf-8', (err, content) => {
                                if (err) {
                                    console.error(`读取文件 ${file} 失败:`, err);
                                    notUpdatedCount++;  // 如果读取失败，视为未更新文件
                                    return resolveFile();  // 确保继续处理其他文件
                                }

                                // 提取 Front Matter 部分（如果存在）
                                let frontMatterMatch = content.match(frontMatterRegex);
                                let contentAfterFrontMatter = content;

                                // 使用文件名作为 title
                                let titleLine = path.basename(file, '.md');  // 获取文件名并去除 .md 扩展名

                                // 如果文件包含 Front Matter
                                if (frontMatterMatch) {
                                    contentAfterFrontMatter = content.slice(frontMatterMatch[0].length).trim(); // 获取 Front Matter 后的内容

                                    // 提取现有的 Front Matter 内容
                                    const frontMatterContent = frontMatterMatch[1];
                                    let currentTitle = '';
                                    let currentUpdated = '';

                                    // 提取现有的 title 和 updated 字段
                                    const titleMatch = frontMatterContent.match(/title:\s*(.*?)(\n|$)/);
                                    const updatedMatch = frontMatterContent.match(/updated:\s*(.*?)(\n|$)/);

                                    if (titleMatch) {
                                        currentTitle = titleMatch[1].trim();
                                    }
                                    if (updatedMatch) {
                                        currentUpdated = updatedMatch[1].trim();
                                    }

                                    // 如果新标题和当前标题相同，跳过更新
                                    if (titleLine === currentTitle) {
                                        notUpdatedCount++;  // 如果标题没有变化，视为未更新
                                        return resolveFile();  // 继续处理其他文件
                                    }

                                    // 更新 Front Matter 中的内容
                                    let updatedFrontMatter = frontMatterContent.replace(/title:\s*.*?(\n|$)/, `title: ${titleLine}\n`);

                                    // 如果没有 title 字段，就添加新的 title 字段
                                    if (!titleMatch) {
                                        updatedFrontMatter = `title: ${titleLine}\n` + updatedFrontMatter;
                                    }

                                    // 如果 updated 字段没有被更新过，则更新
                                    if (!currentUpdated || currentUpdated !== new Date().toISOString().slice(0, 10)) {
                                        updatedFrontMatter = updatedFrontMatter.replace(/updated:\s*.*?(\n|$)/, `updated: ${new Date().toISOString()}\n`);
                                    }

                                    // 生成新的 Front Matter（包括原始内容 + 更新后的 title 和 updated）
                                    const newFrontMatter = `---\n${updatedFrontMatter}---\n`;
                                    // 合并更新后的 Front Matter 和原文件内容（去掉原有的 Front Matter）
                                    const newContent = newFrontMatter + contentAfterFrontMatter;

                                    // 比较新旧内容，检查是否有修改
                                    if (content !== newContent) {
                                        // 写入修改后的文件
                                        fs.writeFile(filePath, newContent, 'utf-8', err => {
                                            if (err) {
                                                console.error(`写入文件 ${file} 失败:`, err);
                                                notUpdatedCount++;  // 写入失败，视为未更新
                                                return resolveFile();  // 继续处理其他文件
                                            } else {
                                                updatedCount++;  // 如果内容有变化，视为已更新
                                                console.log(`已更新文件: ${filePath}`);
                                                resolveFile();  // 处理完成
                                            }
                                        });
                                    } else {
                                        notUpdatedCount++;  // 如果内容没有变化，视为未更新
                                        resolveFile();  // 继续处理其他文件
                                    }
                                } else {
                                    // 如果没有 Front Matter，直接添加新的 Front Matter
                                    const newFrontMatter = `---\ntitle: ${titleLine}\nupdated: ${new Date().toISOString()}\n---\n`;
                                    const newContent = newFrontMatter + content;

                                    fs.writeFile(filePath, newContent, 'utf-8', err => {
                                        if (err) {
                                            console.error(`写入文件 ${file} 失败:`, err);
                                            notUpdatedCount++;  // 写入失败，视为未更新
                                            return resolveFile();  // 继续处理其他文件
                                        } else {
                                            updatedCount++;  // 如果内容有变化，视为已更新
                                            console.log(`已更新文件: ${filePath}`);
                                            resolveFile();  // 处理完成
                                        }
                                    });
                                }
                            });
                        } else {
                            resolveFile();  // 处理非 .md 文件
                        }
                    });
                });
            });

            // 等待所有文件处理完成
            Promise.all(filePromises).then(resolve).catch(reject);
        });
    });
}

// 开始处理目标文件夹
processFolder(folderPath)
    .then(() => {
        // 输出统计信息
        console.log(`更新的文件数: ${updatedCount}`);
        console.log(`未更新的文件数: ${notUpdatedCount}`);
    })
    .catch(err => {
        console.error('处理文件夹时出错:', err);
    });
