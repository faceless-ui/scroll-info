import { useScrollInfo } from '@faceless-ui/scroll-info';
import LogProps from './LogProps';

const UseScrollInfo: React.FC = () => {
  const windowInfo = useScrollInfo();
  return LogProps(windowInfo);
};

export default UseScrollInfo;
