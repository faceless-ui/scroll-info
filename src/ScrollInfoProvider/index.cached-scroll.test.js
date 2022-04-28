// TODO: migrate away from enzyme, maybe to React Testing Library

import React from 'react';
import { mount } from 'enzyme';

import ScrollInfoProvider from '.';

describe('ScrollInfoProvider with a cached scroll', () => {
  // To simulate the behavior of Chrome, the window.scrollTo method needs to be called twice,
  // once before mount and then once after -- see comment on lines 55-60 of ScrollInfoProvider.
  window.scrollTo(534, 390);

  const wrapper = mount(
    <ScrollInfoProvider />,
  );

  window.scrollTo(534, 390);

  it('rendered with an initial state of correct shape and value', () => {
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
    });
  });
});
