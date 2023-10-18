const getComponentFileContent = require("./getComponentFileContent");

function getComponentFileData(componentName) {
  return [
    {
      name: `${componentName}.jsx`,
      content: getComponentFileContent("JSX", componentName),
    },
    {
      name: `${componentName}.module.css`,
      content: getComponentFileContent("CSS", componentName),
    },
    {
      name: "index.js",
      content: getComponentFileContent("index.js", componentName),
    },
  ];
}

module.exports = getComponentFileData;
