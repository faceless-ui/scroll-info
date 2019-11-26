import React, { useContext } from 'react';
import ScrollInfoContext from '../ScrollInfoProvider/context';

const withScrollInfo = (PassedComponent) => {
  const ScrollInfoWrap = (props) => {
    const context = useContext(ScrollInfoContext);
    return (
      <PassedComponent
        {...{
          ...props,
          ...context,
        }}
      />
    );
  };
  return ScrollInfoWrap;
};

export default withScrollInfo;
