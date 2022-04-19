import React, { Fragment } from 'react';
import useScrollInfo from '../useScrollInfo';
import { IScrollInfoContext } from '../ScrollInfoContext';

export type ChildFunction = (context: IScrollInfoContext) => React.ReactNode; // eslint-disable-line no-unused-vars

const ScrollInfo: React.FC<{
  children?: React.ReactNode | ChildFunction
}> = (props) => {
  const { children } = props;
  const scrollInfo = useScrollInfo();

  if (children) {
    if (typeof children === 'function') {
      return (
        <Fragment>
          {children(scrollInfo)}
        </Fragment>
      )
    }

    return (
      <Fragment>
        {children}
      </Fragment>
    )
  }
  return null;
};

export default ScrollInfo;
