import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollInfoContext from './context';

class ScrollInfoProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
      hasScrolled: false,
      animationScheduled: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.requestAnimation);
    this.updateScrollInfo();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.requestAnimation);
  }

  requestAnimation = () => {
    const { animationScheduled } = this.state;
    if (!animationScheduled) {
      this.setState({
        animationScheduled: true,
      }, () => requestAnimationFrame(this.updateScrollInfo));
    }
  }

  updateScrollInfo = (timestamp) => {
    const {
      x: prevScrollX,
      y: prevScrollY,
      xDirection: prevXDirection,
      yDirection: prevYDirection,
      eventsFired: prevEventsFired,
      hasScrolled: prevHasScrolled,
    } = this.state;

    // Set to zero on first render and mount for cross-browser compatibility --
    // Some browsers populate the cached window.pageOffset at different points of the component lifecycle.
    // Chrome mounts with the cached window.pageOffset, while Safari and FireFox both only
    // populate it on first scroll event -- which is triggered by the browser in some cases.
    // The presence of a timestamp indicates that it wasn't first render or first mount,
    // but a true requestAnimationFrame scroll event. Keep at zero otherwise.
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

    /* eslint-disable no-nested-ternary */
    const xDirection = xDifference > 0 ? 'right' : xDifference < 0 ? 'left' : prevXDirection;
    const yDirection = yDifference > 0 ? 'down' : yDifference < 0 ? 'up' : prevYDirection;

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

  render() {
    const { children } = this.props;
    const scrollInfo = { ...this.state };
    delete scrollInfo.hasScrolled;
    delete scrollInfo.animationScheduled;

    return (
      <ScrollInfoContext.Provider value={{ scrollInfo }}>
        {children}
      </ScrollInfoContext.Provider>
    );
  }
}

ScrollInfoProvider.defaultProps = {};

ScrollInfoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScrollInfoProvider;
