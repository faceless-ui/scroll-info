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
      },
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.requestAnimation);
    this.updatescrollInfo();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.requestAnimation);
  }

  updatescrollInfo = () => {
    const {
      scrollInfo: {
        x: lastScrollX,
        y: lastScrollY,
      },
    } = this.state;

    const currentScrollX = window.pageXOffset;
    const currentScrollY = window.pageYOffset;

    this.setState({
      animationScheduled: false,
      scrollInfo: {
        x: currentScrollX,
        y: currentScrollY,
        xDirection: currentScrollX > lastScrollX ? 'right' : 'left',
        yDirection: currentScrollY > lastScrollY ? 'down' : 'up',
        xPercentage: Math.floor((currentScrollX / (document.body.scrollHeight - window.innerWidth)) * 100),
        yPercentage: Math.floor((currentScrollY / (document.body.scrollHeight - window.innerHeight)) * 100),
      },
    });
  };

  requestAnimation = () => {
    const { animationScheduled } = this.state;
    if (!animationScheduled) {
      requestAnimationFrame(this.updatescrollInfo);
      this.setState({ animationScheduled: true });
    }
  }

  render() {
    const { children } = this.props;
    const { scrollInfo } = this.state;

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
