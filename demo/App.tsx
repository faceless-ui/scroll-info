import React from 'react';
import { ScrollInfoProvider } from '@faceless-ui/scroll-info';
// import WithScrollInfo from './WithScrollInfo.demo.js';
import UseScrollInfo from './UseScrollInfo.demo.js';
// import LogProps from './LogProps.js';

const AppDemo: React.FC = () => (
  <ScrollInfoProvider>
    {/* <WithScrollInfo /> */}
    <UseScrollInfo />
    {/* <ScrollInfo>
      {(scrollInfo) => <LogProps {...scrollInfo} />}
    </ScrollInfo> */}
    <div
      id="spacer"
      style={{
        height: '16000px',
        width: '10000px'
      }}
    />
  </ScrollInfoProvider>
);

export default AppDemo;
