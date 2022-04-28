// TODO: migrate away from enzyme, maybe to React Testing Library

import React from 'react';
import { shallow } from 'enzyme';

import ScrollInfoProvider from '../ScrollInfoProvider';
import withScrollInfo from '.';

describe('withScrollInfo', () => {
  const WithScrollInfo = withScrollInfo(() => (
    <code>
      Hello, world!
    </code>
  ));

  // Note: when .props() is called on a shallow wrapper, the returned values will be
  // of the root node that the wrapper component renders — not the component itself.
  // See https://airbnb.io/enzyme/docs/api/ShallowWrapper/props.html
  const wrapper = shallow(
    <ScrollInfoProvider>
      <WithScrollInfo />
    </ScrollInfoProvider>,
  );

  it('rendered with an initial state of correct shape and value', () => {
    const { value: hocProps } = wrapper.props();

    expect(hocProps).toMatchObject({
      x: 0,
      y: 0,
      xDifference: 0,
      yDifference: 0,
      xDirection: '',
      yDirection: '',
      xPercentage: 0,
      yPercentage: 0,
      totalPercentage: 0,
      eventsFired: 0,
    });
  });

  it('received an updated scrollInfo prop after a window scroll event', () => {
    window.scrollTo(233, 325);
    const { value: hocProps } = wrapper.props();

    expect(hocProps).toMatchObject({
      x: 233,
      y: 325,
      xDifference: 233,
      yDifference: 325,
      xDirection: 'right',
      yDirection: 'down',
      xPercentage: 15.969842357779301,
      yPercentage: 7.6795841209829865,
      totalPercentage: 11.824713239381143,
      eventsFired: 1,
    });
  });
});
