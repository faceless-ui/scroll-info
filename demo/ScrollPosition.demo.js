import React from 'react';
import PropTypes from 'prop-types';
import { withScrollPosition } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build

const ScrollPositionDemo = (props) => {
  const {
    scrollPos: {
      x,
      y,
      xDirection,
      yDirection,
    },
  } = props;

  return (
    <div style={{ position: 'fixed' }}>
      <code>
        <pre>
          {`scroll position: { x: ${x}, y: ${y} }`}
          {`scroll direction: { xDirection: ${xDirection}, yDirection: ${yDirection} }`}
        </pre>
      </code>
    </div>
  );
};

ScrollPositionDemo.propTypes = {
  scrollPos: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    xDirection: PropTypes.oneOf([
      'left',
      'right',
    ]),
    yDirection: PropTypes.oneOf([
      'up',
      'down',
    ]),
  }).isRequired,
};

export default withScrollPosition(ScrollPositionDemo);
