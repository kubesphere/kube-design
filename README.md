# Kube Design

A suite of components, hooks, and icons. Originally built for KubeSphere Console, but it can also be used for developing any other React web apps.

## Documentation

[https://kube-design.vercel.app/](https://kube-design.vercel.app/)

## Requirement

Ensure your have the latest version of NodeJS, and a package manager: NPM or Yarn.

- Node.js 12.18+ ([installation with nvm](https://github.com/creationix/nvm#usage))
- Yarn 1.22.4+

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
