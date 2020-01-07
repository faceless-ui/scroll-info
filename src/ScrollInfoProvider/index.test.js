import React from 'react';
import { mount } from 'enzyme';

import ScrollInfoProvider from '.';

describe('ScrollInfoProvider', () => {
  const wrapper = mount(
    <ScrollInfoProvider />,
  );

  it('rendered with an initial state of correct shape and value', () => {
    const state = wrapper.state();

    expect(state).toMatchObject({
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

  it('responded to a window scroll event with an internal state update', () => {
    window.scrollTo(534, 390);
    const state = wrapper.state();

    expect(state).toMatchObject({
      x: 534,
      y: 390,
      xDifference: 534,
      yDifference: 390,
      xDirection: 'right',
      yDirection: 'down',
      xPercentage: 36.60041124057574,
      yPercentage: 9.215500945179585,
      totalPercentage: 22.90795609287766,
      eventsFired: 1,
      hasScrolled: true,
      animationScheduled: false,
    });
  });
});
