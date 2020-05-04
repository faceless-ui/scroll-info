import { useScrollInfo } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import LogProps from './LogProps';

const UseScrollInfo = () => {
  const windowInfo = useScrollInfo();
  return LogProps(windowInfo);
};

export default UseScrollInfo;
