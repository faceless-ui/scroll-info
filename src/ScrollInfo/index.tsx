import React, { Fragment } from 'react';
import useScrollInfo from '../useScrollInfo';
import { IScrollInfoContext } from '../ScrollInfoProvider/context';

export type ChildFunction = (context: IScrollInfoContext) => React.ReactNode; // eslint-disable-line no-unused-vars

export type ScrollInfoProps = {
  children?: React.ReactNode | ChildFunction
}

const ScrollInfo: React.FC<ScrollInfoProps> = (props) => {
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
