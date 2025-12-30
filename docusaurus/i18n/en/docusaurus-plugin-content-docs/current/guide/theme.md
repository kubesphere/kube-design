---
sidebar_position: 3
---

# Theme Customization

Kube Design provides a powerful theming system that allows you to customize colors, layout, fonts, and more.

## Theme Object

The Kubed theme is an object containing a series of theme configurations:

```typescript
interface KubedTheme {
  /** Theme name */
  type: string;
  /** Configure the font and default font size */
  font: KubedThemeFont;
  /** Define spacing, control sizes, border radius, and layout-related properties */
  layout: KubedThemeLayout;
  /** The color palette for customizing theme colors */
  palette: KubedThemePalette;
  /** Set the responsive breakpoints */
  breakpoints: KubedThemeBreakpoints;
  /** Configure shadows, opacities, and line styles */
  expressiveness: KubedThemeExpressiveness;
}
```

## Creating Custom Themes

### Basic Usage

Use `themeUtils.createFromDark()` or `themeUtils.createFromLight()` to create custom themes:

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
        Custom Button
      </Button>
    </KubedConfigProvider>
  );
}
```

## Theme Properties

### Palette

The color palette contains all color configurations including theme colors, backgrounds, and text colors.

**Customizing Primary Color:**

In Kube Design, the primary color is green. You can change it using RGB, RGBA, or hex values:

```jsx
const customTheme = themeUtils.createFromDark({
  type: 'customDark',
  palette: {
    colors: {
      green: ['#E3FAFC', '#C5F6FA', '#99E9F2', '#66D9E8', '#3BC9DB'],
    },
    // Or directly set primary
    // primary: '#3BC9DB',
  },
});
```

### Layout

The layout object contains properties for spacing, control sizes, border radius, and other layout-related settings:

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

### Expressiveness

Configure shadows, opacities, and other expressive design elements:

```jsx
const customTheme = themeUtils.createFromDark({
  type: 'customDark',
  expressiveness: {
    buttonShadow: () => '10px 10px 10px #5e9b7d',
  },
});
```

## Dark Mode

Kube Design supports both light and dark themes out of the box:

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

## Multiple Themes

You can define and switch between multiple themes:

```jsx
const lightTheme = themeUtils.createFromLight({
  type: 'customLight',
  // ... customizations
});

const darkTheme = themeUtils.createFromDark({
  type: 'customDark',
  // ... customizations
});

function App() {
  const [theme, setTheme] = useState('customLight');

  return (
    <KubedConfigProvider 
      themes={[lightTheme, darkTheme]} 
      themeType={theme}
    >
      <button onClick={() => setTheme(theme === 'customLight' ? 'customDark' : 'customLight')}>
        Toggle Theme
      </button>
      <YourApp />
    </KubedConfigProvider>
  );
}
```

## Next Steps

- Explore component-specific theming in the [Components](/docs/components/button) section
- Learn more about the theme API in the documentation

