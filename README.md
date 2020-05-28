[![NPM](https://img.shields.io/npm/v/@faceless-ui/scroll-info)](https://www.npmjs.com/@faceless-ui/scroll-info)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@faceless-ui/scroll-info?label=zipped)
[![Supported by TRBL](https://img.shields.io/badge/supported_by-TRBL-black)](https://github.com/trouble)

# React Scroll Info

## Highlights

## Quick Start

### Installation

```bash
$ npm i @faceless-ui/scroll-info
$ # or
$ yarn add @faceless-ui/scroll-info
```

### Composition

```jsx
  import React from 'react';
  import { ScrollInfoProvider, withScrollInfo, useScrollInfo } from '@faceless-ui/scroll-info';

  const WithScrollInfo = withScrollInfo(({ scrollInfo }) => <div>{scrollInfo}</div>);
  const UseScrollInfo = () => <div>{useScrollInfo()}</div>;

  const App = () => (
    <ScrollInfoProvider>
      <WithScrollInfo />
      <UseScrollInfo />
    </ScrollInfoProvider>
  )

  export default App;
```

For working examples, see the [demo app](./demo/App.demo.js).

## Demo

```bash
$ git clone git@github.com:faceless-ui/scroll-info.git
$ yarn
$ yarn dev
$ open http://localhost:3000
```

## API

  - [ScrollInfo](./src/ScrollInfo/README.md)
  - [ScrollInfoProvider](./src/ScrollInfoProvider/README.md)
  - [useScrollInfo](./src/useScrollInfo/README.md)
  - [withScrollInfo](./src/withScrollInfo/README.md)

## Contribution

[Help us,](https://github.com/faceless-ui/.github/blob/master/CONTRIBUTING.md) or let us [help you help us](https://github.com/faceless-ui/.github/blob/master/SUPPORT.md).

## License

[MIT](https://github.com/faceless-ui/scroll-info/blob/master/LICENSE) Copyright (c) TRBL, LLC
