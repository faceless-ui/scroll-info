import React, { Component } from 'react';
import ScrollInfoContext from '../ScrollInfoContext';
import { IScrollInfoContext } from '../ScrollInfoContext/types';
import { Props } from './types';

class ScrollInfoProvider extends Component<Props, IScrollInfoContext> {
  constructor(props: Props) {
    super(props);

    this.state = {
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
      animationScheduled: false,
    };
  }

  componentDidMount(): void {
    window.addEventListener('scroll', this.requestAnimation);
    this.updateScrollInfo();
  }

  componentWillUnmount(): void {
    window.removeEventListener('scroll', this.requestAnimation);
  }

  requestAnimation = (): void => {
    const { animationScheduled } = this.state;
    if (!animationScheduled) {
      this.setState({
        animationScheduled: true,
      }, () => requestAnimationFrame(this.updateScrollInfo));
    }
  }

  updateScrollInfo = (timestamp?: number): void => {
    const {
      x: prevScrollX,
      y: prevScrollY,
      xDirection: prevXDirection,
      yDirection: prevYDirection,
      eventsFired: prevEventsFired,
      hasScrolled: prevHasScrolled,
    } = this.state;

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

    this.setState({
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
      animationScheduled: false,
    });
  };

  render(): JSX.Element {
    const { children } = this.props;
    const scrollInfo = { ...this.state };
    delete scrollInfo.hasScrolled;
    delete scrollInfo.animationScheduled;

    return (
      <ScrollInfoContext.Provider value={{ ...scrollInfo }}>
        {children && children}
      </ScrollInfoContext.Provider>
    );
  }
}

export default ScrollInfoProvider;
