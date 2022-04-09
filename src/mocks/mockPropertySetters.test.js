const mockPropertySetters = (object, properties) => {
  if (properties && properties.length > 0) {
    properties.forEach((property) => {
      Object.defineProperty(object, property, {
        writable: true,
        set property(value) {
          this[property] = value;
        },
      });
    });
  }
};

export default mockPropertySetters;
