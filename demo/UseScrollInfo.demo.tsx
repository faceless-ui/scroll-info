import { useScrollInfo } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import LogProps from './LogProps';

const UseScrollInfo: React.FC = () => {
  const windowInfo = useScrollInfo();
  return LogProps(windowInfo);
};

export default UseScrollInfo;
