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
    const { scrollPos } = this.state;

    this.setState({
      animationScheduled: false,
      scrollPos: {
        ...scrollPos,
        x: window.pageXOffset,
        y: window.pageYOffset,
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
