# Kube Design

A suite of components, hooks, and icons. Originally built for KubeSphere Console, but it can also be used for developing any other React web apps.

## Documentation

[https://kubesphere-design.netlify.app/zh](https://kubesphere-design.netlify.app/zh)

[Date and time picker compatibility](docs/date-time-picker.md) describes the
React 19 picker baseline, supported APIs, and validation.

## Requirement

Ensure you have Node.js 24 and Yarn Classic installed.

- Node.js 24.x
- Yarn 1.22.22

## React compatibility

The `react-19` branch builds UI packages with the automatic JSX transform and keeps
`react/jsx-runtime` external. These packages require React 16.14 or newer. React 19
applications must also enable the automatic JSX transform in their own build.

See [React 19 compatibility and validation](docs/react-19-compatibility.md) for the
dependency baseline, ref behavior, and verification scope.

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
