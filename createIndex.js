const fs = require('fs');
const path = require('path');

// 获取指定目录中的所有子目录，排除 .git 目录
function getDirectories(source) {
  return fs.readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && dirent.name !== '.git')
    .map(dirent => dirent.name);
}

// 生成 <a> 标签
function generateLinks(directories) {
  return directories.map(dir => `<a target="_blank" href="${dir}">${dir}</a>`).join('\n');
}

// 替换文件中标记之间的内容
function replaceContentInFile(filePath, newContent) {
  const startTag = '<!--start-->';
  const endTag = '<!--end-->';
  const fileContent = fs.readFileSync(filePath, 'utf8');

  console.log('Original File Content:\n', fileContent);

  const newFileContent = fileContent.replace(
    new RegExp(`(${startTag})([\\s\\S]*?)(${endTag})`, 'g'),
    `${startTag}\n${newContent}\n${endTag}`
  );

  console.log('New File Content:\n', newFileContent);

  fs.writeFileSync(filePath, newFileContent, 'utf8');
}

// 主函数
function main() {
  // 获取当前目录中的子目录
  const currentDir = process.cwd();
  const directories = getDirectories(currentDir);
  const links = generateLinks(directories);

  // 需要替换的文件路径
  const filePath = path.join(__dirname, 'index.html'); // 请将 'yourFile.html' 替换为你的实际文件名

  // 替换文件中的内容
  replaceContentInFile(filePath, links);

  console.log('Content replaced successfully.');
}

main();
