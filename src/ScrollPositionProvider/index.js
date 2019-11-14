import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollPositionContext from './context';

class ScrollPositionProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animationScheduled: false,
      scrollPos: {
        x: 0,
        y: 0,
      },
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.requestAnimation);
    this.updateScrollPos();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.requestAnimation);
  }

  updateScrollPos = () => {
    const {
      scrollPos: {
        x: lastScrollX,
        y: lastScrollY,
      },
    } = this.state;

    const currentScrollX = window.pageXOffset;
    const currentScrollY = window.pageYOffset;

    this.setState({
      animationScheduled: false,
      scrollPos: {
        x: currentScrollX,
        y: currentScrollY,
        xDirection: currentScrollX > lastScrollX ? 'right' : 'left',
        yDirection: currentScrollY > lastScrollY ? 'down' : 'up',
      },
    });
  };

  requestAnimation = () => {
    const { animationScheduled } = this.state;
    if (!animationScheduled) {
      requestAnimationFrame(this.updateScrollPos);
      this.setState({ animationScheduled: true });
    }
  }

  render() {
    const { children } = this.props;
    const { scrollPos } = this.state;

    return (
      <ScrollPositionContext.Provider value={{ scrollPos }}>
        {children}
      </ScrollPositionContext.Provider>
    );
  }
}

ScrollPositionProvider.defaultProps = {};

ScrollPositionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScrollPositionProvider;
