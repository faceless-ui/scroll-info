import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollInfoContext from './context';

class ScrollInfoProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animationScheduled: false,
      scrollInfo: {
        x: 0,
        y: 0,
        xDifference: 0,
        yDifference: 0,
        xDirection: '',
        yDirection: '',
        xPercentage: 0,
        yPercentage: 0,
      },
      count: 0,
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
      scrollInfo: {
        x: lastScrollX,
        y: lastScrollY,
      },
      count: scrollCount,
    } = this.state;

    // Set to zero on first trigger for cross-browser compatility
    // The inconsistencies occur when the window is reloaded with a cached scroll position
    // Chrome mounts with the window page offset while Safari and FireFox receive it on first scroll
    const currentScrollX = scrollCount > 0 ? window.pageXOffset : 0;
    const currentScrollY = scrollCount > 0 ? window.pageYOffset : 0;

    const xDifference = currentScrollX - lastScrollX;
    const yDifference = currentScrollY - lastScrollY;

    this.setState({
      animationScheduled: false,
      scrollInfo: {
        x: currentScrollX,
        y: currentScrollY,
        xDifference,
        yDifference,
        xDirection: xDifference > 0 ? 'right' : 'left',
        yDirection: yDifference > 0 ? 'down' : 'up',
        xPercentage: Number((currentScrollX / (document.body.scrollHeight - window.innerWidth) * 100).toFixed(3)),
        yPercentage: Number((currentScrollY / (document.body.scrollHeight - window.innerHeight) * 100).toFixed(3)),
      },
    });
  };

  requestAnimation = () => {
    const { animationScheduled, count } = this.state;
    if (!animationScheduled) {
      requestAnimationFrame(this.updateScrollInfo);
      this.setState({ animationScheduled: true, count: count + 1 });
    }
  }

  render() {
    const { children } = this.props;
    const { scrollInfo, count } = this.state;

    return (
      <ScrollInfoContext.Provider value={{
        scrollInfo: {
          ...scrollInfo,
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
