import React from 'react';
import ScrollInfoContext from '../ScrollInfoProvider/context';

const withScrollInfo = (PassedComponent) => {
  const ScrollInfoWrap = (props) => (
    <ScrollInfoContext.Consumer>
      {(context) => (
        <PassedComponent
          {...{
            ...props,
            ...context,
          }}
        />
      )}
    </ScrollInfoContext.Consumer>
  );
  return ScrollInfoWrap;
};

export default withScrollInfo;
