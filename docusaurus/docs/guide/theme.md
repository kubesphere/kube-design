---
sidebar_position: 3
---

# 主题定制

Kube Design 提供了强大的主题系统，允许您自定义颜色、布局、字体等。

## 主题对象

Kubed 主题是一个包含一系列主题配置的对象：

```typescript
interface KubedTheme {
  /** 主题名称 */
  type: string;
  /** 配置字体和默认字体大小 */
  font: KubedThemeFont;
  /** 定义间距、控件大小、边框半径和布局相关属性 */
  layout: KubedThemeLayout;
  /** 用于自定义主题颜色的调色板 */
  palette: KubedThemePalette;
  /** 设置响应式断点 */
  breakpoints: KubedThemeBreakpoints;
  /** 配置阴影、不透明度和线条样式 */
  expressiveness: KubedThemeExpressiveness;
}
```

## 创建自定义主题

### 基本用法

使用 `themeUtils.createFromDark()` 或 `themeUtils.createFromLight()` 创建自定义主题：

```jsx
import { KubedConfigProvider, Button, themeUtils } from '@kubed/components';

function App() {
  const customDarkTheme = themeUtils.createFromDark({
    type: 'customDark',
    palette: {
      colors: {
        green: ['#E9EDFC', '#E9EDFC', '#E9EDFC', '#E9EDFC', '#E9EDFC'],
      },
    },
    layout: {
      inputSizes: {
        sm: '24px',
      },
    },
    expressiveness: {
      buttonShadow: () => '10px 10px 10px hotpink',
    },
  });

  return (
    <KubedConfigProvider themes={[customDarkTheme]} themeType="customDark">
      <Button color="primary" shadow>
        自定义按钮
      </Button>
    </KubedConfigProvider>
  );
}
```

## 主题属性

### 调色板（Palette）

调色板包含所有颜色配置，包括主题颜色、背景和文本颜色。

**自定义主色：**

在 Kube Design 中，主色是绿色。您可以使用 RGB、RGBA 或十六进制值进行更改：

```jsx
const customTheme = themeUtils.createFromDark({
  type: 'customDark',
  palette: {
    colors: {
      green: ['#E3FAFC', '#C5F6FA', '#99E9F2', '#66D9E8', '#3BC9DB'],
    },
    // 或者直接设置 primary
    // primary: '#3BC9DB',
  },
});
```

### 布局（Layout）

布局对象包含间距、控件大小、边框半径和其他布局相关设置的属性：

```jsx
const customTheme = themeUtils.createFromDark({
  type: 'customDark',
  layout: {
    inputSizes: {
      xs: '16px',
      sm: '24px',
      md: '32px',
      lg: '40px',
      xl: '48px',
    },
  },
});
```

### 表现力（Expressiveness）

配置阴影、不透明度和其他富有表现力的设计元素：

```jsx
const customTheme = themeUtils.createFromDark({
  type: 'customDark',
  expressiveness: {
    buttonShadow: () => '10px 10px 10px #5e9b7d',
  },
});
```

## 暗黑模式

Kube Design 开箱即用地支持浅色和暗黑主题：

```jsx
import { KubedConfigProvider, darkTheme } from '@kubed/components';

function App() {
  return (
    <KubedConfigProvider themeType="dark">
      <YourApp />
    </KubedConfigProvider>
  );
}
```

## 多主题

您可以定义并在多个主题之间切换：

```jsx
const lightTheme = themeUtils.createFromLight({
  type: 'customLight',
  // ... 自定义配置
});

const darkTheme = themeUtils.createFromDark({
  type: 'customDark',
  // ... 自定义配置
});

function App() {
  const [theme, setTheme] = useState('customLight');

  return (
    <KubedConfigProvider
      themes={[lightTheme, darkTheme]}
      themeType={theme}
    >
      <button onClick={() => setTheme(theme === 'customLight' ? 'customDark' : 'customLight')}>
        切换主题
      </button>
      <YourApp />
    </KubedConfigProvider>
  );
}
```

## 下一步

- 在[组件](/docs/components/button)部分探索特定组件的主题定制
- 在文档中了解更多关于主题 API 的信息

