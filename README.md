[![NPM](https://img.shields.io/npm/v/@trbl/react-scroll-info)](https://www.npmjs.com/@trbl/react-scroll-info)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@trbl/react-scroll-info?label=zipped)
[![Supported by TRBL](https://img.shields.io/badge/supported_by-TRBL-black)](https://github.com/trouble)

# React Scroll Info

## Highlights

## Quick Start

### Installation

```bash
$ npm i @trbl/react-scroll-info
$ # or
$ yarn add @trbl/react-scroll-info
```

### Composition

```jsx
  import React from 'react';
  import { ScrollInfoProvider, withScrollInfo, useScrollInfo } from '@trbl/react-scroll-info';

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
$ git clone git@github.com:trouble/react-scroll-info.git
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

[Help us,](https://github.com/trouble/.github/blob/master/CONTRIBUTING.md) or let us [help you help us](https://github.com/trouble/.github/blob/master/SUPPORT.md).

## License

[MIT](https://github.com/trouble/react-scroll-info/blob/master/LICENSE) Copyright (c) TRBL, LLC
