import PropTypes from 'prop-types';
import { withScrollInfo } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build

import LogProps from './LogProps';

const WithScrollInfo = (props) => {
  const { scrollInfo } = props;
  return LogProps(scrollInfo);
};

WithScrollInfo.defaultProps = {};

WithScrollInfo.propTypes = {
  scrollInfo: PropTypes.shape({}).isRequired,
};

export default withScrollInfo(WithScrollInfo);
