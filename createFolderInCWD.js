const fs = require("fs");
const path = require("path");

function createFolderInCWD(name) {
  try {
    const folderPath = path.join(process.cwd(), name);
    fs.mkdirSync(folderPath, { recursive: true });
    return folderPath;
  } catch (error) {
    console.error(`Failed to create ${name} folder(s): `, error);
    process.exit(1);
  }
}

module.exports = createFolderInCWD;
