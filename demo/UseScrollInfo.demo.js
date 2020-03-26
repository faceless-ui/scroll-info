import React from 'react';
import { useScrollInfo } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build

const UseScrollInfo = () => {
  const {
    x,
    y,
    xDifference,
    yDifference,
    xDirection,
    yDirection,
    xPercentage,
    yPercentage,
    totalPercentage,
    eventsFired,
  } = useScrollInfo();

  return (
    <div style={{ position: 'fixed' }}>
      <code>
        <pre>
          {'scrollInfo: {'}
          <br />
          &emsp;
          {`x: ${x},`}
          <br />
          &emsp;
          {`y: ${y},`}
          <br />
          &emsp;
          {`xDifference: ${xDifference},`}
          <br />
          &emsp;
          {`yDifference: ${yDifference},`}
          <br />
          &emsp;
          {`xDirection: ${xDirection},`}
          <br />
           &emsp;
          {`yDirection: ${yDirection},`}
          <br />
          &emsp;
          {`xPercentage: ${xPercentage},`}
          <br />
          &emsp;
          {`yPercentage: ${yPercentage},`}
          <br />
          &emsp;
          {`totalPercentage: ${totalPercentage},`}
          <br />
          &emsp;
          {`eventsFired: ${eventsFired},`}
          <br />
          {'}'}
        </pre>
      </code>
    </div>
  );
};

export default UseScrollInfo;
