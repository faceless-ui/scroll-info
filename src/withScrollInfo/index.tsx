import React from 'react';
import { useScrollInfo } from '..';

const withScrollInfo = <P extends Record<string, unknown>>(
  PassedComponent: React.ComponentType<P>,
): React.FC<P> => {
  const ScrollInfoWrap: React.FC<P> = (props) => {
    const scrollInfoContext = useScrollInfo();

    return (
      <PassedComponent
        {...{
          ...props,
          scrollInfo: scrollInfoContext,
        }}
      />
    );
  };
  return ScrollInfoWrap;
};

export default withScrollInfo;
