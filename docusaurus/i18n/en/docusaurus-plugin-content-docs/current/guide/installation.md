---
sidebar_position: 2
---

# Installation

## Requirements

Ensure you have the latest version of Node.js and a package manager (npm, Yarn, or pnpm).

- **Node.js** 16+ ([installation with nvm](https://github.com/nvm-sh/nvm#usage))
- **npm** 7+ or **Yarn** 1.22+ or **pnpm** 8+

## Install Packages

Install Kube Design packages using your preferred package manager:

```bash
# Using npm
npm install @kubed/components @kubed/hooks @kubed/icons

# Using Yarn
yarn add @kubed/components @kubed/hooks @kubed/icons

# Using pnpm
pnpm add @kubed/components @kubed/hooks @kubed/icons
```

## Usage

### 1. Setup Provider

Wrap your application with the `KubedConfigProvider`:

```jsx
import { CssBaseline, KubedConfigProvider } from '@kubed/components';

const App = () => (
  <KubedConfigProvider>
    <CssBaseline /> {/* Normalize styles */}
    <YourApp /> {/* Your application root */}
  </KubedConfigProvider>
);

export default App;
```

### 2. Use Components

Import and use components in your application:

```jsx
import { Button, Input, Select } from '@kubed/components';
import { User } from '@kubed/icons';

const MyComponent = () => (
  <div>
    <Button variant="filled" color="primary">
      Click Me
    </Button>
    <Input placeholder="Enter text..." />
    <User size={24} />
  </div>
);
```

### 3. Use Hooks

Import and use hooks:

```jsx
import { useClipboard, useToggle } from '@kubed/hooks';

const MyComponent = () => {
  const clipboard = useClipboard();
  const [visible, toggle] = useToggle(false);

  return (
    <div>
      <button onClick={() => clipboard.copy('Hello World')}>
        Copy to Clipboard
      </button>
      <button onClick={() => toggle()}>
        Toggle: {visible ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};
```

## TypeScript Support

Kube Design is written in TypeScript and provides full type definitions out of the box. No additional configuration is needed.

```tsx
import { Button, ButtonProps } from '@kubed/components';

const CustomButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## Next Steps

- Explore [Components](/docs/components/button) to see all available components
- Check out [Hooks](/docs/hooks/use-clipboard) for useful React hooks
- Learn about [Theming](/docs/guide/theme) to customize the look and feel
