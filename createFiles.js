const fs = require("fs");
const path = require("path");

function createFiles(folderPath, fileData) {
  console.log(folderPath);
  for (const file of fileData) {
    try {
      const filePath = path.join(folderPath, file.name);
      fs.writeFileSync(filePath, file.content);
    } catch (error) {
      console.error(`Failed to create ${file.name} file: `, error);
      process.exit(1);
    }
  }
}

module.exports = createFiles;
