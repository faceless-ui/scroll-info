import React from 'react';
import { ScrollPositionProvider } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import ScrollPositionDemo from './ScrollPosition.demo';

const AppDemo = () => {
  return (
    <ScrollPositionProvider>
      <ScrollPositionDemo />
      <div
        id="spacer"
        style={{ height: '10000px', width: '10000px' }}
      />
    </ScrollPositionProvider>
  );
};

export default AppDemo;
