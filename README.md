# Kube Design

A suite of components, hooks, and icons. Originally built for KubeSphere Console, but it can also be used for developing any other React web apps.

## Documentation

[https://kubesphere-design.netlify.app/zh](https://kubesphere-design.netlify.app/zh)

## Requirement

To develop and build this repository, including the documentation site in `docs/`, install Node.js 26 and Yarn Classic.

- Node.js 26.x
- Yarn 1.22.22

The `next` packages support React 19. Keep `react`, `react-dom`, and `react-is`
on the same React 19 version in the consuming application. Package builds and
tests use the automatic JSX runtime.

`@kubed/charts` uses Recharts 2.15.4 or later in the 2.x line. Recharts 2 declares
an older `react-is` dependency, so consumers must override its `react-is`
resolution to the application's React 19 version. Configure this in the
application's Yarn `resolutions`, pnpm `overrides`, or npm `overrides`; the
resolutions in this repository apply only to its own workspace installation.

React 19 runtime verification and dependency details are recorded in
[the compatibility notes](docs/react-19-runtime.md).

## Installation

```sh
$ yarn add @kubed/components @kubed/hooks @kubed/icons

# or

$ npm i @kubed/components @kubed/hooks @kubed/icons
```

## Usage

1. Wrap your application with the `KubedConfigProvider`:

```jsx
import { CssBaseline, KubedConfigProvider } from '@kubed/components';

const Application = () => (
  <KubedConfigProvider>
    <CssBaseline /> // ---> Normalize styles
    <AppComponent /> // ---> Root of your application
  </KubedConfigProvider>
)
```

2. Use components like so:

```jsx
import { Button } from "@kubed/components"

const MyComponent = () => <Button>Click Me</Button>
```

## Contributing

...

## Thank

We benefit a lot from these awesome project, Many thanks to them.

- [Mantine](https://github.com/mantinedev/mantine)
- [ant-design](https://github.com/ant-design/ant-design/)
- [Geist](https://github.com/geist-org/react)
- [chakra-ui](https://github.com/chakra-ui/chakra-ui/)

## License

MIT © [kubesphere](https://github.com/kubesphere)
