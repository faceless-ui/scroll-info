import { withScrollInfo } from '@faceless-ui/scroll-info';
import type { IScrollInfoContext } from '../src/types';
import LogProps from './LogProps';

const WithScrollInfo: React.FC<{
  scrollInfo: IScrollInfoContext
}> = (props) => {
  const { scrollInfo } = props;
  return LogProps(scrollInfo);
};

export default withScrollInfo(WithScrollInfo);
