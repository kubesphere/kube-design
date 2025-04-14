import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./configs/vitest/setup.ts'],
    include: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
    alias: {
      '@kubed/icons': resolve(__dirname, 'packages/icons/dist'),
      '@kubed/tests': resolve(__dirname, 'packages/tests/src'),
      '@kubed/components': resolve(__dirname, 'packages/components/src'),
      '@kubed/hooks': resolve(__dirname, 'packages/hooks/src'),
    },
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['packages/components/src/**/*.{ts,tsx}'],
      exclude: [
        'node_modules',
        'dist',
        'build',
        'public',
        'docs',
        '**/*.test.ts',
        'esm',
        'cjs',
        'lib',
        '**/*.story.tsx',
        '**/*.style.ts',
      ],
    },
  },
});
