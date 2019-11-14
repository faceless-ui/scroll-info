import React from 'react';
import ScrollInfoContext from '../ScrollInfoProvider/context';

const withScrollInfo = (PassedComponent) => {
  const ScrollInfoWrap = (props) => {
    return (
      <ScrollInfoContext.Consumer>
        {(context) => {
          return (
            <PassedComponent
              {...{
                ...props,
                ...context,
              }}
            />
          );
        }}
      </ScrollInfoContext.Consumer>
    );
  };
  return ScrollInfoWrap;
};

export default withScrollInfo;
