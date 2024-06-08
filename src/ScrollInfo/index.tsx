import React, { Fragment } from 'react';
import { useScrollInfo } from '../useScrollInfo/index.js';
import { IScrollInfoContext } from '../ScrollInfoProvider/context.js';

export type ChildFunction = (context: IScrollInfoContext) => React.ReactNode; // eslint-disable-line no-unused-vars

export type ScrollInfoProps = {
  children?: React.ReactNode | ChildFunction
}

export const ScrollInfo: React.FC<ScrollInfoProps> = (props) => {
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
