import { withScrollInfo } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import { IScrollInfoContext } from '../src/ScrollInfoProvider/context';
import LogProps from './LogProps';

const WithScrollInfo: React.FC<{
  scrollInfo: IScrollInfoContext
}> = (props) => {
  const { scrollInfo } = props;
  return LogProps(scrollInfo);
};

export default withScrollInfo(WithScrollInfo);
