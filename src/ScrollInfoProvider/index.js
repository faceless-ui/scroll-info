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
      count: 0,
      eventsFired: 0,
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
      x: lastScrollX,
      y: lastScrollY,
      count: scrollCount,
      eventsFired,
    } = this.state;

    // Set to zero on first iteration for cross-browser compatibility
    // The inconsistencies occur when the window is reloaded with a cached scroll position
    // Chrome mounts with the cached window.pageOffset
    // Safari and FireFox don't populate it until the first scroll event which is triggered by the browser
    const currentScrollX = eventsFired > 0 ? window.pageXOffset : 0;
    const currentScrollY = eventsFired > 0 ? window.pageYOffset : 0;

    const xDifference = currentScrollX - lastScrollX;
    const yDifference = currentScrollY - lastScrollY;

    const scrollHasChanged = xDifference !== 0 || yDifference !== 0;

    this.setState({
      animationScheduled: false,
      x: currentScrollX,
      y: currentScrollY,
      xDifference,
      yDifference,
      xDirection: xDifference > 0 ? 'right' : 'left',
      yDirection: yDifference > 0 ? 'down' : 'up',
      xPercentage: Number((currentScrollX / (document.body.scrollWidth - window.innerWidth) * 100).toFixed(3)),
      yPercentage: Number((currentScrollY / (document.body.scrollHeight - window.innerHeight) * 100).toFixed(3)),
      count: scrollHasChanged ? scrollCount + 1 : scrollCount,
    });
  };

  requestAnimation = () => {
    const { animationScheduled, eventsFired } = this.state;
    if (!animationScheduled) {
      requestAnimationFrame(this.updateScrollInfo);
      this.setState({ animationScheduled: true, eventsFired: eventsFired + 1 });
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
      count,
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
            count,
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
