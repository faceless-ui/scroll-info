[![NPM](https://img.shields.io/npm/v/@trbl/react-scroll-position)](https://www.npmjs.com/@trbl/react-scroll-position)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@trbl/react-scroll-position?label=zipped)
[![Supported by TRBL](https://img.shields.io/badge/supported_by-TRBL-black)](https://github.com/trouble)

# React Scroll Position

A roll, as of parchment or papyrus, used especially in the writing of a document.

## Quick Start

### Installation

```bash
$ yarn add @trbl/react-scroll-position
```

### Compositon

```jsx
  import React from 'react';
  import { ScrollPositionProvider, withScrollPosition } from '@trbl/react-scroll-position';

  const MyComponent = withScrollPosition(() => return <div>My Component</div>);

  const App = () => {
    return (
      <ScrollPositionProvider>
        <MyComponent>
          ...
        </MyComponent>
      </ScrollPositionProvider>
    )
  }

  export default App;
```

## Demo

To demo locally, clone the repo and

```bash
$ yarn install
$ npm run dev
$ open http://localhost:3000
```

## Documentation

All available props can be found via the references below:

  - [ScrollPositionProvider](/src/ScrollPositionProvider/README.md)
  - [withScrollPosition](/src/withScrollPosition/README.md)

## License

[MIT](https://github.com/trouble/react-scroll-position/blob/master/LICENSE) Copyright (c) TRBL, LLC
