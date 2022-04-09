import mockPropertySetters from './mockPropertySetters.test';

const mockWindowScrollEvents = ({ scrollArea }) => {
  const [scrollWidth, scrollHeight] = scrollArea;

  if (window?.document?.body) {
    mockPropertySetters(window.document.body, ['scrollWidth', 'scrollHeight']);

    window.document.body.scrollWidth = scrollWidth;
    window.document.body.scrollHeight = scrollHeight;

    window.scrollTo = function scrollTo(xCoord, yCoord) {
      Object.assign(this, {
        pageXOffset: xCoord,
        pageYOffset: yCoord,
      }).dispatchEvent(new this.Event('scroll'));
    };
  }
};

export default mockWindowScrollEvents;
