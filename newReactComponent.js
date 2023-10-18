const createFolderInCWD = require("./createFolderInCWD");
const createFiles = require("./createFiles");
const getComponentFileData = require("./getComponentFileData");

function newReactComponent() {
  const componentName = process.argv[2];

  if (!componentName) {
    console.error("Component name not provided.");
    process.exit(1);
  }

  const folderPath = createFolderInCWD(componentName);
  const fileData = getComponentFileData(componentName);
  createFiles(folderPath, fileData);

  console.log(`${componentName} component files created successfully!`);
}

module.exports = newReactComponent;