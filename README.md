# Kube Design

Kube Design is a set of React component libraries created for KubeSphere console.

[![NPM](https://img.shields.io/npm/v/@kube-design/components.svg)](https://www.npmjs.com/package/@kube-design/components)

import { Meta } from "@storybook/addon-docs/blocks";

<Meta title="Foundation/Introduction" />

## Requirement

- Node.js 12.18+ ([installation with nvm](https://github.com/creationix/nvm#usage))
- Yarn 1.22.4+

## Installation

```shell
yarn add @kube-design/components
```

## Example

```jsx
import React, { Component } from "react";

import { Button } from "@kube-design/components";

class Example extends Component {
  render() {
    return <Button>Button</Button>;
  }
}
```

## Import All Styles

There are two ways to import style files.

### Use css

The css file can be imported directly, so no additional configuration is required in the webpack configuration file.

```jsx
import "@kube-design/components/esm/styles/index.css";
```

### Use scss

If you import the scss file, you may need to compile this part of the scss file in the webpack configuration file.

```jsx
import "@kube-design/components/esm/styles/index.scss";
```

webpack.config.js

```js
// module.rules
[
  ...otherRules,
  {
    test: /\.s[ac]ss$/i,
    include: root("node_modules"),
    use: ["style-loader", "css-loader", "sass-loader"],
  },
];
```

## Modular Import

You can use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) to load the component library on demand.

> When loading on demand, styles will also be imported on demand. You don't need to import all styles, only `main.scss`.

Configure the babel as follows:

```js
// babel.config.js

const getBabelPluginImportConfig = require('@kube-design/components/babel.plugin.import')

...

"plugins": [
  ['import', getBabelPluginImportConfig()],
]
```

Import the `main.scss` instead of `index.scss`

```jsx
import "@kube-design/components/esm/styles/main.scss";
```

## Localization

Kube Design use `LocaleProvider` component to support localization.

1. Define locales

```js
// locales.js

const locales = {
  "en-US": {
    HELLO: "Hello!",
  },
  "zh-CN": {
    HELLO: "你好!",
  },
};

export default locales;
```

2. Use the LocaleProvider component to wrap the root node

The `locale` method can be assigned to `window` for easy use.

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { LocaleProvider } from "@kube-design/components";
import locales from "./locales";
import App from "./App";

window.locale = LocaleProvider.locale;

const App = () => (
  <LocaleProvider locales={locales} currentLocale="en">
    <App />
  </LocaleProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
```

3. In the root node App.jsx and its child nodes, use `locale.get('key')` to get the language text

```jsx
import React from "react";
import { Button } from "@kube-design/components";

export default () => <Button>{locale.get("HELLO")}</Button>;
```

## License

MIT © [kubesphere](https://github.com/kubesphere)