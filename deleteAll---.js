const fs = require('fs');
const path = require('path');

// 匹配 --- 及其之前的所有内容，包括多行内容
const frontMatterRegex = /.*?---\s*[\r\n]/g;

// 设置目标文件夹路径
const folderPath = 'C:\\Users\\Administrator\\Desktop\\myblog\\小米云盘\\TyporaNotes';  // 修改为你的 md 文件夹路径

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

                                // 删除所有 --- 及其之前的内容（包括换行符）
                                let newContent = content.replace(frontMatterRegex, '').trim();

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
