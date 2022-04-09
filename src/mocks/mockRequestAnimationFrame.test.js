const mockAnimationFrame = () => {
  if (window) {
    window.requestAnimationFrame = (callback) => {
      const timestamp = performance.now();
      callback(timestamp);
    };
  }
};

export default mockAnimationFrame;
