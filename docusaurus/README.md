# Kube Design Documentation

This is the official documentation website for Kube Design, built with [Docusaurus 3](https://docusaurus.io/).

## Getting Started

### Prerequisites

- Node.js 16+
- pnpm (recommended)

### Installation

Install dependencies from the monorepo root:

```bash
cd /path/to/kube-design
pnpm install
```

### Development

Start the development server:

```bash
cd my-website
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

The site will be available at `http://localhost:3000/kube-design/`

### Build

Build the website for production:

```bash
npm run build
```

This command generates static content into the `build` directory.

### Serve

Test the production build locally:

```bash
npm run serve
```

## Documentation Structure

```
my-website/
├── docs/                    # Documentation files
│   ├── intro.md            # Homepage/Introduction
│   ├── guide/              # Guide section
│   │   ├── introduction.md
│   │   ├── installation.md
│   │   └── theme.md
│   ├── components/         # Component documentation
│   │   ├── button.mdx
│   │   ├── input.mdx
│   │   └── select.mdx
│   ├── hooks/             # Hooks documentation
│   │   ├── use-clipboard.mdx
│   │   └── use-toggle.mdx
│   └── icons/             # Icons documentation
│       └── overview.mdx
├── src/
│   ├── components/        # React components for the site
│   └── pages/            # Custom pages
├── static/               # Static assets
├── docusaurus.config.ts  # Site configuration
└── sidebars.ts          # Sidebar navigation
```

## Features

- ✅ **Multi-language Support**: English and Chinese
- ✅ **Component Documentation**: Comprehensive component API docs
- ✅ **Hooks Documentation**: React hooks usage guides
- ✅ **Icons Library**: Complete icon system documentation
- ✅ **Code Examples**: Interactive code examples in MDX
- ✅ **Dark Mode**: Built-in dark mode support
- ✅ **Search**: Full-text search functionality
- ✅ **Responsive**: Mobile-friendly design

## Adding New Documentation

### Add a New Component Doc

1. Create a new MDX file in `docs/components/`:
   ```bash
   touch docs/components/my-component.mdx
   ```

2. Add frontmatter and content:
   ```mdx
   ---
   sidebar_position: 4
   ---

   # MyComponent

   Component description...
   ```

3. Add to sidebar in `sidebars.ts`:
   ```ts
   componentsSidebar: [
     {
       type: 'category',
       label: 'Components',
       items: [
         'components/button',
         'components/input',
         'components/select',
         'components/my-component', // Add here
       ],
     },
   ],
   ```

### Add a New Guide

Follow the same pattern in `docs/guide/` and update `sidebars.ts`.

## Configuration

### Site Configuration

Edit `docusaurus.config.ts` to configure:
- Site metadata (title, tagline, etc.)
- Deployment settings
- Theme settings
- Navbar items
- Footer links

### Sidebar Configuration

Edit `sidebars.ts` to organize documentation structure.

## Deployment

The site can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

For GitHub Pages:

```bash
npm run build
# Deploy the build/ directory
```

## Contributing

When adding new documentation:

1. Follow the existing structure
2. Use MDX for component examples
3. Include proper frontmatter
4. Test locally before committing
5. Update sidebars.ts if needed

## Learn More

- [Docusaurus Documentation](https://docusaurus.io/)
- [Kube Design Repository](https://github.com/kubesphere/kube-design)
- [KubeSphere Console](https://github.com/kubesphere/console)
