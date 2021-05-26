import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
} from 'react';
import ScrollInfoContext from '../ScrollInfoContext';
import { IScrollInfoContext } from '../ScrollInfoContext/types';
import { Props } from './types';

const reducer = (
  state: IScrollInfoContext,
  payload: {
    e?: WheelEvent,
    timestamp?: number,
    animationRef: React.MutableRefObject<number>
  },
) => {
  const {
    timestamp,
    animationRef,
  } = payload;

  animationRef.current = undefined;

  const {
    x: prevScrollX,
    y: prevScrollY,
    xDirection: prevXDirection,
    yDirection: prevYDirection,
    eventsFired: prevEventsFired,
    hasScrolled: prevHasScrolled,
  } = state;

  // Set currentScroll to zero on mount for cross-browser compatibility --
  // Some browsers populate the cached window.pageOffset at different points of the component lifecycle.
  // Chrome mounts with cached window.pageOffset coordinates even before firing the respective cached scroll event.
  // Neither Safari and FireFox populate these coordinates until this cached scroll (natively triggered by the browser).
  // The presence of a timestamp indicates that the caller of this method was not componentDidMount,
  // but rather a true scroll event via requestAnimationFrame. Keep at zero otherwise.
  const hasScrolled = prevHasScrolled || Boolean(timestamp);
  const currentScrollX = hasScrolled ? window.pageXOffset : 0;
  const currentScrollY = hasScrolled ? window.pageYOffset : 0;
  // Only increment the eventsFired state after the first true scroll event.
  const eventsFired = hasScrolled ? prevEventsFired + 1 : prevEventsFired;

  const xDifference = currentScrollX - prevScrollX;
  const yDifference = currentScrollY - prevScrollY;

  const xPercentage = (currentScrollX / (document.body.scrollWidth - window.innerWidth)) * 100;
  const yPercentage = (currentScrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  const totalPercentage = (xPercentage + yPercentage) / 2;

  const xDirection = xDifference > 0 ? 'right' : xDifference < 0 ? 'left' : prevXDirection; // eslint-disable-line no-nested-ternary
  const yDirection = yDifference > 0 ? 'down' : yDifference < 0 ? 'up' : prevYDirection; // eslint-disable-line no-nested-ternary

  return {
    x: currentScrollX,
    y: currentScrollY,
    xDifference,
    yDifference,
    xDirection,
    yDirection,
    xPercentage,
    yPercentage,
    totalPercentage,
    eventsFired,
    hasScrolled,
  };
};

const ScrollInfoProvider: React.FC<Props> = (props) => {
  const {
    children,
  } = props;

  const animationRef = useRef<number>(null);

  const [state, dispatch] = useReducer(reducer, {
    x: 0,
    y: 0,
    xDifference: 0,
    yDifference: 0,
    xDirection: undefined,
    yDirection: undefined,
    xPercentage: 0,
    yPercentage: 0,
    totalPercentage: 0,
    eventsFired: 0,
    hasScrolled: false,
  });

  const requestAnimation = useCallback((e?: WheelEvent): void => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(
      (timestamp) => {
        dispatch({
          e,
          timestamp,
          animationRef,
        });
      },
    );
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', requestAnimation);
    return () => {
      window.removeEventListener('scroll', requestAnimation);
    };
  }, [requestAnimation]);

  // use this effect to test rAF debounce by requesting animation every 1ms, for a total 120ms
  // count the number of times 'requestAnimation' callback is fired compared to the reducer
  // results: ~23 requests will be made, ~17 requests will be canceled, so only ~8 will truly dispatch
  // useEffect(() => {
  //   const firstID = setInterval(requestAnimation, 1);
  //   setInterval(() => clearInterval(firstID), 120);
  // }, [requestAnimation]);

  return (
    <ScrollInfoContext.Provider
      value={{
        ...state,
      }}
    >
      {children && children}
    </ScrollInfoContext.Provider>
  );
};

export default ScrollInfoProvider;
