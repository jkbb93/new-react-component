# new-react-component
A small CLI tool to quickly and conveniently create a folder and basic starting files for a new React component. Generates a JSX, CSS Module, and index.js file with some basic content.

Handy for when you're creating a lot of components from scratch.

## Installation
To install `new-react-component` globally on your machine, clone the repository and run the global installation command:

### 1. Clone the repository:
```sh
git clone https://github.com/jkbb93/new-react-component.git
```

### 2. Install the CLI tool globally on your machine
Navigate into the repository's directory:
```sh
cd new-react-component
```

Install globally, e.g.
```sh
npm install -g .
```

## Usage
Once installed, run the `newreactcomp` command followed by the name you want to give your component - e.g.
```sh
newreactcomp MyNewComponent
```
This will create a new folder named MyNewComponent in your current directory, with the following files:

* MyNewComponent.jsx: The main component file.
* MyNewComponent.module.css: A CSS module for the component's styles.
* index.js: An index file exporting the component, so that it can be imported by referencing the folder name.
  
In addition, the JSX file will have some basic boilerplate code to get you started quickly:

```jsx
import styles from "./MyNewComponent.module.css";

function MyNewComponent() {
  return;
}

export default MyNewComponent;
```



