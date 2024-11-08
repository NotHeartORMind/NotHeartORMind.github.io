const fs = require('fs');
const path = require('path');

// Front Matter 匹配正则（匹配最外层的 --- 包裹的内容）
const frontMatterRegex = /^---\s*\r?\n([\s\S]*?)\r?\n---\s*$/;

// 设置目标文件夹路径
const folderPath = 'C:\\Users\\Administrator\\Desktop\\myblog\\source\\_posts\\TyporaNotes';  // 修改为你的 md 文件夹路径

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

                                // 使用文件名作为 title
                                let titleLine = path.basename(file, '.md');  // 获取文件名并去除 .md 扩展名
                                let currentUpdated = new Date().toISOString(); // 获取当前更新时间

                                // 新的 Front Matter 内容模板，仅更新 title 和 updated
                                let newFrontMatter = `---\n` +
                                    `title: ${titleLine}\n` +
                                    `updated: ${currentUpdated}\n` +
                                    `---\n`;

                                // 检查文件是否包含 Front Matter
                                let frontMatterMatch = content.match(frontMatterRegex);
                                let contentAfterFrontMatter = content;

                                // 如果文件包含 Front Matter
                                if (frontMatterMatch) {
                                    // 直接替换掉最外层的 --- 和其中的内容
                                    contentAfterFrontMatter = content.slice(frontMatterMatch[0].length).trim(); // 获取 Front Matter 后的内容

                                    // 提取现有 Front Matter 内容并保持除 title 和 updated 外的字段不变
                                    const frontMatterContent = frontMatterMatch[1];
                                    let updatedFrontMatter = frontMatterContent;

                                    // 更新 title 字段
                                    updatedFrontMatter = updatedFrontMatter.replace(/title:\s*.*?(\n|$)/, `title: ${titleLine}\n`);

                                    // 更新 updated 字段
                                    updatedFrontMatter = updatedFrontMatter.replace(/updated:\s*.*?(\n|$)/, `updated: ${currentUpdated}\n`);

                                    // 生成新的 Front Matter，并直接替换旧的
                                    const newContent = `---\n${updatedFrontMatter}---\n` + contentAfterFrontMatter;

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
                                    // 如果没有 Front Matter 或格式不正确，直接添加新的 Front Matter
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
