function getJSXFileContent(componentName) {
  return `import styles from "./${componentName}.module.css";
  
function ${componentName}() {
    return;
}

export default ${componentName};`;
}

function getCSSFileContent() {
  return "";
}

function getIndexFileContent(componentName) {
  return `export { default } from "./${componentName}";`;
}

function getComponentFileContent(type, componentName) {
  switch (type) {
    case "JSX": {
      return getJSXFileContent(componentName);
    }
    case "CSS": {
      return getCSSFileContent();
    }
    case "index.js": {
      return getIndexFileContent(componentName);
    }
    default:
      return "";
  }
}

module.exports = getComponentFileContent;
