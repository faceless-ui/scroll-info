import React from 'react';
import { ScrollInfoProvider } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
// import WithScrollInfo from './WithScrollInfo.demo';
import UseScrollInfo from './UseScrollInfo.demo';

const AppDemo = () => (
  <ScrollInfoProvider>
    {/* <WithScrollInfo /> */}
    <UseScrollInfo />
    <div
      id="spacer"
      style={{ height: '16000px', width: '10000px' }}
    />
  </ScrollInfoProvider>
);

export default AppDemo;
