[![NPM](https://img.shields.io/npm/v/@trbl/react-scroll-info)](https://www.npmjs.com/@trbl/react-scroll-info)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@trbl/react-scroll-info?label=zipped)
[![Supported by TRBL](https://img.shields.io/badge/supported_by-TRBL-black)](https://github.com/trouble)

# React Scroll Info

A roll, as of parchment or papyrus, used especially in the writing of a document.

## Quick Start

### Installation

```bash
$ yarn add @trbl/react-scroll-info
```

### Composition

```jsx
  import React from 'react';
  import { ScrollInfoProvider, withScrollInfo } from '@trbl/react-scroll-info';

  const MyComponent = withScrollInfo(() => <div>My Component</div>);

  const App = () => {
    return (
      <ScrollInfoProvider>
        <MyComponent>
          ...
        </MyComponent>
      </ScrollInfoProvider>
    )
  }

  export default App;
```

## Demo

To demo locally, clone the repo and

```bash
$ yarn
$ yarn dev
$ open http://localhost:3000
```

## Documentation

All available props can be found via the references below:

  - [ScrollInfoProvider](./src/ScrollInfoProvider/README.md)
  - [withScrollInfo](./src/withScrollInfo/README.md)

## Contribution

[Help us,](https://github.com/trouble/.github/blob/master/CONTRIBUTING.md) or let us [help you help us](https://github.com/trouble/.github/blob/master/SUPPORT.md).

## License

[MIT](https://github.com/trouble/react-scroll-info/blob/master/LICENSE) Copyright (c) TRBL, LLC
