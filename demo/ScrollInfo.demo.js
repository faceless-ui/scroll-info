import React from 'react';
import PropTypes from 'prop-types';
import { withScrollInfo } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build

const ScrollInfoDemo = (props) => {
  const {
    scrollInfo: {
      x,
      y,
      xDirection,
      yDirection,
      xPercentage,
      yPercentage,
    },
  } = props;

  return (
    <div style={{ position: 'fixed' }}>
      <code>
        <pre>
          {`scroll position: { x: ${x}, y: ${y} }`}
          <br />
          {`scroll direction: { xDirection: ${xDirection}, yDirection: ${yDirection} }`}
          <br />
          {`scroll percentage: { xPercentage: ${xPercentage}, yPercentage: ${yPercentage} }`}
        </pre>
      </code>
    </div>
  );
};

ScrollInfoDemo.propTypes = {
  scrollInfo: PropTypes.shape({
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
    xPercentage: PropTypes.number,
    yPercentage: PropTypes.number,
  }).isRequired,
};

export default withScrollInfo(ScrollInfoDemo);
