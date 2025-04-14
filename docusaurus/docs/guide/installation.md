---
sidebar_position: 2
---

# 安装

## 环境要求

确保您安装了最新版本的 Node.js 和包管理器（npm、Yarn 或 pnpm）。

- **Node.js** 16+ ([使用 nvm 安装](https://github.com/nvm-sh/nvm#usage))
- **npm** 7+ 或 **Yarn** 1.22+ 或 **pnpm** 8+

## 安装包

使用您喜欢的包管理器安装 Kube Design 包：

```bash
# 使用 npm
npm install @kubed/components @kubed/hooks @kubed/icons

# 使用 Yarn
yarn add @kubed/components @kubed/hooks @kubed/icons

# 使用 pnpm
pnpm add @kubed/components @kubed/hooks @kubed/icons
```

## 使用方法

### 1. 配置 Provider

使用 `KubedConfigProvider` 包裹您的应用程序：

```jsx
import { CssBaseline, KubedConfigProvider } from '@kubed/components';

const App = () => (
  <KubedConfigProvider>
    <CssBaseline /> {/* 标准化样式 */}
    <YourApp /> {/* 您的应用程序根组件 */}
  </KubedConfigProvider>
);

export default App;
```

### 2. 使用组件

在您的应用程序中导入并使用组件：

```jsx
import { Button, Input, Select } from '@kubed/components';
import { User } from '@kubed/icons';

const MyComponent = () => (
  <div>
    <Button variant="filled" color="primary">
      点击我
    </Button>
    <Input placeholder="输入文本..." />
    <User size={24} />
  </div>
);
```

### 3. 使用 Hooks

导入并使用 Hooks：

```jsx
import { useClipboard, useToggle } from '@kubed/hooks';

const MyComponent = () => {
  const clipboard = useClipboard();
  const [visible, toggle] = useToggle(false);

  return (
    <div>
      <button onClick={() => clipboard.copy('Hello World')}>
        复制到剪贴板
      </button>
      <button onClick={() => toggle()}>
        开关：{visible ? '开' : '关'}
      </button>
    </div>
  );
};
```

## TypeScript 支持

Kube Design 使用 TypeScript 编写，并提供开箱即用的完整类型定义。无需额外配置。

```tsx
import { Button, ButtonProps } from '@kubed/components';

const CustomButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## 下一步

- 浏览[组件](/docs/components/button)查看所有可用的组件
- 查看[Hooks](/docs/hooks/use-clipboard)了解实用的 React Hooks
- 了解[主题](/docs/guide/theme)以自定义外观和风格
