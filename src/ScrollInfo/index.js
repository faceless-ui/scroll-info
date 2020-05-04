import PropTypes from 'prop-types';
import useScrollInfo from '../useScrollInfo';

const ScrollInfo = (props) => {
  const { children } = props;
  const scrollInfo = useScrollInfo();
  if (children && typeof children === 'function') return children(scrollInfo);
  return null;
};

ScrollInfo.defaultProps = {
  children: undefined,
};

ScrollInfo.propTypes = {
  children: PropTypes.func,
};

export default ScrollInfo;
