import React, { useState, useEffect } from 'react';
import { KubedConfigProvider, CssBaseline } from '@kubed/components';

export default function Root({ children }: { children: React.ReactNode }) {
  // Docusaurus stores theme in html[data-theme] attribute
  // Using data-theme is the recommended approach to avoid SSR/hydration issues
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    const htmlElement = document.documentElement;

    // Get initial theme
    const initialTheme = htmlElement.getAttribute('data-theme') || 'light';
    setTheme(initialTheme);

    // Watch for theme changes via MutationObserver
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const newTheme = htmlElement.getAttribute('data-theme') || 'light';
          setTheme(newTheme);
        }
      });
    });

    observer.observe(htmlElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <KubedConfigProvider themeType={theme}>
      <CssBaseline />
      {children}
    </KubedConfigProvider>
  );
}
