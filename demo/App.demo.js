import React from 'react';
import { ScrollInfoProvider } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import ScrollInfoDemo from './ScrollInfo.demo';

const AppDemo = () => {
  return (
    <ScrollInfoProvider>
      <ScrollInfoDemo />
      <div
        id="spacer"
        style={{ height: '16000px', width: '10000px' }}
      />
    </ScrollInfoProvider>
  );
};

export default AppDemo;
