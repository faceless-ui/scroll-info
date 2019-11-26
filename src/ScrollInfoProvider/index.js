import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollInfoContext from './context';

class ScrollInfoProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animationScheduled: false,
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
      animationsFired: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.requestAnimation);
    this.updateScrollInfo();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.requestAnimation);
  }

  updateScrollInfo = () => {
    const {
      x: prevScrollX,
      y: prevScrollY,
      xDirection: prevXDirection,
      yDirection: prevYDirection,
      eventsFired,
      animationsFired,
    } = this.state;

    // Set to zero on first iteration for cross-browser compatibility
    // The inconsistencies occur when the window is reloaded with a cached scroll position
    // Chrome mounts with the cached window.pageOffset
    // Safari and FireFox don't populate it until the first scroll event which is triggered by the browser
    const currentScrollX = animationsFired > 0 ? window.pageXOffset : 0;
    const currentScrollY = animationsFired > 0 ? window.pageYOffset : 0;

    const xDifference = currentScrollX - prevScrollX;
    const yDifference = currentScrollY - prevScrollY;

    const xPercentage = Number((currentScrollX / (document.body.scrollWidth - window.innerWidth)).toFixed(3));
    const yPercentage = Number((currentScrollY / (document.body.scrollHeight - window.innerHeight)).toFixed(3));
    const totalPercentage = Number(((xPercentage + yPercentage) / 2).toFixed(3));

    const xDirection = xDifference > 0 ? 'right' : xDifference < 0 ? 'left' : prevXDirection;
    const yDirection = yDifference > 0 ? 'down' : yDifference < 0 ? 'up' : prevYDirection;

    const scrollHasChanged = xDifference !== 0 || yDifference !== 0;

    this.setState({
      animationScheduled: false,
      x: currentScrollX,
      y: currentScrollY,
      xDifference,
      yDifference,
      xDirection,
      yDirection,
      xPercentage,
      yPercentage,
      totalPercentage,
      eventsFired: scrollHasChanged ? eventsFired + 1 : eventsFired,
    });
  };

  requestAnimation = () => {
    const { animationScheduled, animationsFired } = this.state;
    if (!animationScheduled) {
      requestAnimationFrame(this.updateScrollInfo);
      this.setState({ animationScheduled: true, animationsFired: animationsFired + 1 });
    }
  }

  render() {
    const { children } = this.props;
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
    } = this.state;

    return (
      <ScrollInfoContext.Provider
        value={{
          scrollInfo: {
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
          },
        }}
      >
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
