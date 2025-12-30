# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kube Design is a comprehensive React component library originally built for KubeSphere Console, featuring components, hooks, and icons. The project uses a monorepo structure with multiple packages and documentation platforms.

## Architecture

### Monorepo Structure
- **Packages**: Located in `/packages/` with individual build configurations
- **Documentation**: Multiple platforms (Next.js docs, Nextra, Astro)
- **Build System**: Custom TypeScript/Rollup-based build with ESM/CJS output
- **Testing**: Vitest with React Testing Library and jest-axe for accessibility

### Key Packages
- `@kubed/components` - Main React component library (50+ components)
- `@kubed/icons` - Icon system with generation pipeline
- `@kubed/hooks` - React utility hooks
- `@kubed/charts` - Chart components
- `@kubed/code-editor` - Code editor component
- `@kubed/diff-viewer` - Diff viewer component
- `@kubed/log-viewer` - Log viewer component

## Development Commands

### Core Commands
```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build:all

# Build specific package
pnpm build components

# Development with live reload
pnpm storybook                    # Storybook on port 7001
pnpm start:docs                  # Next.js docs development

# Linting and Type Checking
pnpm lint                        # ESLint for all packages
pnpm typecheck                   # TypeScript checking
pnpm test                        # Run all tests + syncpack

# Testing
pnpm test:watch                  # Watch mode testing
pnpm test:coverage              # Coverage reports
pnpm test:ui                    # Vitest UI interface
```

### Package-Specific Commands
```bash
# Build individual packages
pnpm build components           # Build components package
pnpm build icons               # Build icons package
pnpm build:docs               # Build documentation

# Generate documentation
pnpm docs:docgen              # Auto-generate component docs
```

## Build System

### Build Configuration
- **Output Formats**: ESM (`esm/`), CJS (`cjs/`), TypeScript definitions (`lib/`)
- **Builder**: Custom TypeScript/Rollup configuration in `/scripts/`
- **Source**: Each package has `src/` → builds to `esm/` + `cjs/` + `lib/`

### Build Options
```bash
# Available build flags
--analyze          # Generate bundle analysis
--sourcemap        # Include source maps (default: true)
--minify           # Minify UMD files (default: false)
--formats          # Output formats: es, cjs (default: both)
```

## Testing

### Test Setup
- **Framework**: Vitest with React Testing Library
- **Environment**: jsdom with styled-components support
- **Accessibility**: jest-axe for a11y testing
- **Coverage**: Reports in HTML, JSON, and text formats

### Test Patterns
- Component tests: `*.test.tsx` alongside components
- Story files: `*.story.tsx` for Storybook
- Test utilities: `@kubed/tests` package with shared helpers

### Running Tests
```bash
# Single test file
vitest run Button.test.tsx

# Test with coverage for specific package
vitest run --coverage.include="packages/components/src/Button/**/*"

# Test specific pattern
vitest run Alert
```

## Documentation Platforms

### 1. Next.js Documentation (`/docs/`)
- **Tech**: Next.js 14 with MDX, i18n support
- **Run**: `pnpm start:docs` (port 3000)
- **Build**: `pnpm build:docs`

### 2. Nextra Documentation (`/nextra/`)
- **Tech**: Next.js 15 with Nextra 4
- **Run**: `pnpm dev` from /nextra directory
- **Features**: Pagefind search, Tailwind CSS

### 3. Astro Documentation (`/astro/`)
- **Tech**: Astro with React components
- **Run**: `pnpm dev` from /astro directory

## Package Development

### Creating New Components
1. Create component in `packages/components/src/[ComponentName]/`
2. Add `.story.tsx` for Storybook
3. Add `.test.tsx` for tests
4. Export from `packages/components/src/index.ts`
5. Run `pnpm build components` to build

### Component Structure
```
ComponentName/
├── ComponentName.tsx          # Main component
├── ComponentName.styles.ts    # Styled components
├── ComponentName.story.tsx    # Storybook story
├── ComponentName.test.tsx     # Component tests
└── index.ts                   # Re-export
```

### Icon System
- **Source**: SVG files in `packages/icons/source/`
- **Generation**: `pnpm build icons` generates React components
- **Output**: Multiple icon sets (fill, duotone variants)

## Tooling

### Dependencies
- **Package Manager**: pnpm with workspace support
- **Styling**: styled-components with theme system
- **TypeScript**: Strict mode with ES2015 target
- **Linting**: ESLint with Airbnb config + TypeScript
- **Formatting**: Prettier

### Configuration Files
- **TypeScript**: `tsconfig.base.json` (base), individual package configs
- **Build**: `scripts/utils/build-package.ts` (shared build logic)
- **Testing**: `vitest.config.ts` (test configuration)
- **Linting**: ESLint config at root level

## Environment Setup

### Node.js Requirements
- Node.js 16+ (recommended: latest LTS)
- pnpm 8+ (package manager)

### IDE Integration
- TypeScript path mapping configured for `@kubed/*` packages
- Storybook for component development
- Vitest for test running

## Common Development Flow

1. **Start development**: `pnpm storybook` for component work
2. **Create component**: Add to `packages/components/src/`
3. **Test**: `pnpm test:watch` for TDD
4. **Build**: `pnpm build [package]` to verify builds
5. **Document**: Update MDX files in `/docs/` or `/nextra/`
6. **Check**: `pnpm lint && pnpm typecheck` before commit